import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Transaction } from '../app/index';

// Interface para definir as propriedades que o componente espera
interface DespesasProps {
  onBack: () => void;
  despesas: Transaction[]; 
}

export default function Despesas({ onBack, despesas }: DespesasProps) {

  // Calcula o total das despesas para exibir no card de resumo
  const totalDespesas = despesas.reduce((sum, item) => sum + item.value, 0);

  // Componente para renderizar cada item da lista
  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemIcon}>
        {/* Ícone e cor alterados para representar despesa */}
        <Ionicons name="arrow-down-circle-outline" size={32} color="#E74C3C" />
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemDescription}>{item.description}</Text>
        {/* Usamos um texto fixo por enquanto. No futuro, você pode adicionar categorias. */}
        <Text style={styles.itemCategory}>Despesa</Text>
      </View>
      <View style={styles.itemValueContainer}>
        <Text style={[styles.itemValue, { color: '#E74C3C' }]}>
          {`R$ ${item.value.toFixed(2).replace('.', ',')}`}
        </Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
  );

  // Componente para exibir quando a lista está vazia
  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
        <Ionicons name="wallet-outline" size={60} color="#90CDE8" />
        <Text style={styles.emptyText}>Nenhuma despesa encontrada.</Text>
        <Text style={styles.emptySubText}>Tudo em ordem por aqui!</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho da Tela */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Minhas Despesas</Text>
        <View style={{ width: 40 }} /> 
      </View>

      {/* Card de Resumo */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Total de Despesas</Text>
        <Text style={[styles.summaryValue, { color: '#E74C3C' }]}>
          {`R$ ${totalDespesas.toFixed(2).replace('.', ',')}`}
        </Text>
      </View>

      {/* Lista de Despesas */}
      <FlatList
        data={despesas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
}

// Estilos adaptados do componente Receitas.tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#074F6E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#48A7D0',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  itemIcon: {
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemDescription: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemCategory: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  itemValueContainer: {
    alignItems: 'flex-end',
  },
  itemValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDate: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: 14,
    color: '#90CDE8',
    marginTop: 8,
    textAlign: 'center',
  }
});
