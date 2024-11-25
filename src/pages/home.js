import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Swiper from 'react-native-swiper'; // Importando o Swiper

// Imagens fictícias para os banners (substitua com suas imagens reais)
import banner1 from '../assets/banner1.jpg';  // Certifique-se de que as imagens existam nesse caminho
import banner2 from '../assets/banner2.jpg';  // Certifique-se de que as imagens existam nesse caminho
import banner3 from '../assets/banner3.jpg';  // Certifique-se de que as imagens existam nesse caminho

// Imagens corrigidas para os serviços
import hotelImage from '../assets/home.png';  // Ajuste a extensão correta se necessário
import petshopImage from '../assets/shop.png';
import medicoImage from '../assets/doc.png';

export default function Home({ navigation }) {
  // Função para mostrar a localização do serviço (exemplo de navegação ou alerta)
  const showServiceLocation = (serviceName) => {
    Alert.alert(`Você clicou em ${serviceName}`, `Aqui estão os detalhes sobre o ${serviceName}`);
    // Aqui você pode colocar a navegação ou detalhes específicos para cada serviço.
  };

  return (
    <ScrollView style={styles.container}>
      {/* Carrossel de banners */}
      <Swiper style={styles.wrapper} showsButtons={false} loop={true} autoplay={true}>
        <View style={styles.carouselItem}>
          <Image source={banner1} style={styles.carouselImage} />
        </View>
        <View style={styles.carouselItem}>
          <Image source={banner2} style={styles.carouselImage} />
        </View>
        <View style={styles.carouselItem}>
          <Image source={banner3} style={styles.carouselImage} />
        </View>
      </Swiper>

      {/* Texto sobre o projeto */}
      <View style={styles.projectInfo}>
        <Text style={styles.projectTitle}>Sobre o Projeto</Text>
        <Text style={styles.projectDescription}>
          Este aplicativo foi criado para proporcionar aos donos de pets uma forma fácil e eficiente de cuidar do bem-estar dos seus animais. 
          Oferecemos uma série de serviços essenciais, como hospedagem de qualidade em hotel para pets, cuidados especializados em petshop e 
          atendimento veterinário de excelência. Tudo isso pensado para garantir o conforto e a saúde do seu pet.
        </Text>
      </View>

      <Text style={styles.title}>Serviços Disponíveis</Text>

      {/* Hotel para Pets */}
      <TouchableOpacity
        style={styles.serviceCard}
        onPress={() => showServiceLocation('Hotel para Pets')}
      >
        <Image source={hotelImage} style={styles.serviceImage} />
        <Text style={styles.serviceTitle}>Hotel para Pets</Text>
        <Text style={styles.serviceDescription}>Hospedagem de qualidade para seu pet!</Text>
      </TouchableOpacity>

      {/* PetShop */}
      <TouchableOpacity
        style={styles.serviceCard}
        onPress={() => showServiceLocation('PetShop')}
      >
        <Image source={petshopImage} style={styles.serviceImage} />
        <Text style={styles.serviceTitle}>PetShop</Text>
        <Text style={styles.serviceDescription}>Produtos e cuidados para seu pet.</Text>
      </TouchableOpacity>

      {/* Médico para Pets */}
      <TouchableOpacity
        style={styles.serviceCard}
        onPress={() => showServiceLocation('Médico para Pets')}
      >
        <Image source={medicoImage} style={styles.serviceImage} />
        <Text style={styles.serviceTitle}>Médico para Pets</Text>
        <Text style={styles.serviceDescription}>Consultas e cuidados veterinários especializados.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  wrapper: {
    marginBottom: 20,
    height: 220,  // Diminuir altura do carrossel para não sobrecarregar a tela
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  carouselImage: {
    width: '100%',
    height: 180,  // Reduzindo a altura das imagens do carrossel
    borderRadius: 10,
    resizeMode: 'cover',
  },
  projectInfo: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  features: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  featuresDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  featuresList: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#555',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
    padding: 10,
  },
  serviceImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#555',
  },
});
