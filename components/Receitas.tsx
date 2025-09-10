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
interface ReceitasProps {
  onBack: () => void;
  receitas: Transaction[]; 
}

// Dados de exemplo (mock). No futuro, isso virá de uma API ou banco de dados.

export default function Receitas({ onBack, receitas}: ReceitasProps) {

  // Calcula o total das receitas para exibir no card de resumo
  const totalReceitas = receitas.reduce((sum, item) => sum + item.value, 0);

  // Componente para renderizar cada item da lista
  const renderItem = ({ item }: { item: typeof receitas[0] }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemIcon}>
        <Ionicons name="arrow-up-circle-outline" size={32} color="#2ECC71" />
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemDescription}>{item.description}</Text>
        {/* <Text style={styles.itemCategory}>{item.category}</Text> */}
      </View>
      <View style={styles.itemValueContainer}>
        <Text style={styles.itemValue}>
          {`R$ ${item.value.toFixed(2).replace('.', ',')}`}
        </Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho da Tela */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Minhas Receitas</Text>
        <View style={{ width: 40 }} /> 
      </View>

      {/* Card de Resumo */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Total de Receitas (Julho)</Text>
        <Text style={styles.summaryValue}>
          {`R$ ${totalReceitas.toFixed(2).replace('.', ',')}`}
        </Text>
      </View>

      {/* Lista de Receitas */}
      <FlatList
        data={receitas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

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
    color: '#2ECC71',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
    color: '#2ECC71',
  },
  itemDate: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 2,
  },
});
