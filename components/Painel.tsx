// components/Painel.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  //Image,
  SafeAreaView,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Transaction } from '../app/index';

type TransactionType = 'receita' | 'despesa';

interface PainelProps {
  onNavigateReceitas: () => void;
  onNavigateDespesas: () => void;
  onAddTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
  onLogout: () => void;
  userData?: any;
}

export default function Painel({ 
  onNavigateReceitas, 
  onNavigateDespesas,
  onAddTransaction,
  onLogout,
  userData 
}: PainelProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [transactionType, setTransactionType] = useState<TransactionType>('receita');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const userName = 'Francisco Sorares';
  const userRole = 'Analista de Sistemas, Maceió';

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Deseja realmente sair do aplicativo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', onPress: onLogout }
      ]
    );
  };


  // Função para abrir o modal e definir o tipo inicial
  const openModal = (type: TransactionType) => {
    setTransactionType(type);
    setDescription('');
    setValue('');
    setModalVisible(true);
  };

  // 2. Função de salvar agora é genérica
  const handleSaveTransaction = () => {
    if (!description || !value ) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
        const numericValue = parseFloat(value.replace(',', '.'));
    if (!description || !value || isNaN(numericValue) || numericValue <= 0) {
      Alert.alert('Erro', 'Preencha todos os campos com valores válidos.');
      return;
    }

    onAddTransaction({
      type: transactionType,
      description: description,
      value: numericValue,
    });

    const successMessage = transactionType === 'receita' 
      ? 'Receita adicionada com sucesso!' 
      : 'Despesa adicionada com sucesso!';

    Alert.alert('Sucesso', successMessage);
    setModalVisible(false);
  };

    // Variáveis dinâmicas para o Modal baseadas no tipo
  const modalTitle = transactionType === 'receita' ? 'Nova Receita' : 'Nova Despesa';
  const saveButtonText = transactionType === 'receita' ? 'Salvar Receita' : 'Salvar Despesa';
  const saveButtonColor = transactionType === 'receita' ? '#2ECC71' : '#E74C3C';

  return (
    <SafeAreaView style={styles.container}>
      {/* View do header dados do usuário */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.userInfo}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person-circle" size={80} color="#fff" />
            </View>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{userName}</Text>
              <Text style={styles.userRole}>{userRole}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleLogout} style={styles.settingsButton}>
            <Ionicons name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

        {/* views de botões do painel principal */}
      <View style={styles.mainContent}>
        <TouchableOpacity 
          style={[styles.mainButton, styles.receitasButton]}
          onPress={onNavigateReceitas}
          activeOpacity={0.8}
        >
          <Ionicons name="trending-up" size={28} color="#fff" />
          <Text style={styles.buttonText}>Ver Receita</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.mainButton, styles.despesasButton]}
          onPress={onNavigateDespesas}
          activeOpacity={0.8}
        >
          <Ionicons name="trending-down" size={28} color="#fff" />
          <Text style={styles.buttonText}>Ver Despesas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.mainButton, styles.novaLancamentoButton]}
          onPress={() => openModal('receita')}
          activeOpacity={0.8}
        >
          <Ionicons name="add-circle-outline" size={28} color="#fff" />
          <Text style={styles.buttonText}>+ Novo Lançamento</Text>
        </TouchableOpacity>
      </View>






      {/* Modal Nova Receita ou Despesa */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}
        >
          <TouchableOpacity 
            style={styles.modalOverlay} 
            activeOpacity={1} 
            onPress={() => setModalVisible(false)}
          />
          
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={28} color="#074F6E" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

              <View style={styles.modalForm}>
                <Text style={styles.inputLabel}>Tipo de Lançamento</Text>
                <View style={styles.typeSelectorContainer}>
                  <TouchableOpacity
                    style={[
                      styles.typeButton,
                      transactionType === 'receita' && styles.typeButtonSelectedReceita
                    ]}
                    onPress={() => setTransactionType('receita')}
                  >
                    <Text style={[styles.typeButtonText, transactionType === 'receita' && styles.typeButtonTextSelected]}>
                      Receita
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.typeButton,
                      transactionType === 'despesa' && styles.typeButtonSelectedDespesa
                    ]}
                    onPress={() => setTransactionType('despesa')}
                  >
                     <Text style={[styles.typeButtonText, transactionType === 'despesa' && styles.typeButtonTextSelected]}>
                      Despesa
                    </Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.inputLabel}>Descrição</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex: Salário, Aluguel, etc."
                  placeholderTextColor="#999"
                  value={description}
                  onChangeText={setDescription}
                />

                <Text style={styles.inputLabel}>Valor</Text>
                <TextInput
                  style={styles.input}
                  placeholder="R$ 0,00"
                  placeholderTextColor="#999"
                  value={value}
                  onChangeText={setValue}
                  keyboardType="numeric"
                />

                <TouchableOpacity 
                  style={[styles.saveButton, { backgroundColor: saveButtonColor }]} // Cor do botão dinâmica
                  onPress={handleSaveTransaction}
                  activeOpacity={0.8}
                >
                  <Text style={styles.saveButtonText}>{saveButtonText}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#074F6E',
  },
  header: {
    backgroundColor: '#48A7D0',
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  userRole: {
    fontSize: 14,
    color: '#074F6E',
    opacity: 0.9,
  },
  settingsButton: {
    padding: 10,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  mainButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
  },
  receitasButton: {
    backgroundColor: '#2ECC71',
  },
  despesasButton: {
    backgroundColor: '#E74C3C',
  },
  novaLancamentoButton: {
    backgroundColor: '#48A7D0',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#074F6E',
  },
  modalForm: {
    paddingTop: 10,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#074F6E',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  saveButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
    elevation: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  // --- NOVOS ESTILOS PARA O SELETOR ---
  typeSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  typeButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 5,
  },
  typeButtonSelectedReceita: {
    backgroundColor: '#2ECC71',
    borderColor: '#2ECC71',
  },
  typeButtonSelectedDespesa: {
      backgroundColor: '#E74C3C',
      borderColor: '#E74C3C',
  },
  typeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  typeButtonTextSelected: {
    color: '#fff',
  },
});