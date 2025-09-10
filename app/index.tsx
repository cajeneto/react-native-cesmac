import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '@/components/Login';
import Painel from '@/components/Painel';
import Receitas from '@/components/Receitas';
import Despesas from '@/components/Despesas';


export interface Transaction {
  id: string;
  type: 'receita' | 'despesa';
  description: string;
  value: number;
  date: string;
}

type Screen = 'login' | 'painel' | 'receitas' | 'despesas';

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [userData, setUserData] = useState<any>(null);
  
  // 2. Criar um estado central para TODAS as transações
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // 3. useEffect para carregar os dados do AsyncStorage quando o app iniciar
  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const storedTransactions = await AsyncStorage.getItem('transactions');
        if (storedTransactions !== null) {
          setTransactions(JSON.parse(storedTransactions));
        }
      } catch (error) {
        console.error("Failed to load transactions from storage", error);
      }
    };
    loadTransactions();
  }, []); // O array vazio [] faz com que isso rode apenas uma vez

  // Função para navegar entre telas
  const navigate = (screen: Screen, data?: any) => {
    setCurrentScreen(screen);
    if (data) {
      setUserData(data);
    }
  };

  // 4. Função para adicionar uma nova transação e salvar no AsyncStorage
  const handleAddTransaction = async (transaction: Omit<Transaction, 'id' | 'date'>) => {
    try {
      const newTransaction: Transaction = {
        ...transaction,
        id: new Date().toISOString(), // ID único baseado no tempo
        date: new Date().toLocaleDateString('pt-BR'), // Data formatada
      };
      
      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      
      // Salva a lista atualizada no dispositivo
      await AsyncStorage.setItem('transactions', JSON.stringify(updatedTransactions));

    } catch (error) {
      console.error("Failed to save transaction", error);
    }
  };

  // 5. Filtrar apenas as receitas para passar para a tela de Receitas
  const receitas = transactions.filter(t => t.type === 'receita');
  const despesas = transactions.filter(t => t.type === 'despesa');

  // Renderiza a tela baseado no estado
  switch (currentScreen) {
    case 'login':
      return <Login onLoginSuccess={() => navigate('painel')} />;
    
    case 'painel':
      return (
        <Painel 
          onNavigateReceitas={() => navigate('receitas')}
          onNavigateDespesas={() => navigate('despesas')}
          onLogout={() => navigate('login')}
          userData={userData}
          onAddTransaction={handleAddTransaction} 
        />
      );
    
    case 'receitas':
      return (
        <Receitas 
          onBack={() => navigate('painel')}
          receitas={receitas}
        />
      );
    case 'despesas':
      return (
        <Despesas 
          onBack={() => navigate('painel')}
          despesas={despesas}
        />
      );
    
    default:
      return <Login onLoginSuccess={() => navigate('painel')} />;
  }
}

