import * as React from 'react';

// Components
const { View, Text, Image, ScrollView, Linking, TouchableOpacity } = require('react-native');
const styles = require('../style/general');

// Output
module.exports = function Home({ navigation }) {
  const contactInfo = {
    address: 'Rua Exemplo, 123 - Centro, São Paulo/SP',
    phone: '+551112345678',
    whatsapp: '+5511987654321',
    website: 'https://www.patioexemplo.com.br',
    email: 'contato@patioexemplo.com.br',
    facebook: 'https://facebook.com/patioexemplo',
    instagram: 'https://instagram.com/patioexemplo',
  };

  // Button Handlers
  const handleOpenMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`
    Linking.openURL(url)
  }
  const handleCall = () => Linking.openURL(`tel:${contactInfo.phone}`)
  const handleWhatsApp = () => Linking.openURL(`https://wa.me/${contactInfo.whatsapp}`)
  const handleEmail = () => Linking.openURL(`mailto:${contactInfo.email}?subject=Contato%20Pátio`)

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Logo */}
        <Image 
          style={styles.logo} 
          source={require('../assets/logo-transparent.png')} 
        />

        {/* Localização */}
        <View style={styles.contactInfo}>
          <Text style={styles.sectionTitle}>Visite nos</Text>
          
          <Text style={styles.contactText}>{contactInfo.address}</Text>
          <TouchableOpacity onPress={handleOpenMap}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image 
              style={styles.photo}
              source={require('../assets/patio1.jpg')} 
            />
          </ScrollView>
          </TouchableOpacity>
        </View>

        {/* Redes Sociais */}
        <View style={styles.contactInfo}>
          <Text style={[styles.sectionTitle]}>Redes Sociais</Text>
          <TouchableOpacity 
            style={[styles.socialButton, {backgroundColor: '#3b5998'}]} 
            onPress={() => Linking.openURL(contactInfo.facebook)}
          >
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.socialButton, {backgroundColor: '#E1306C'}]} 
            onPress={() => Linking.openURL(contactInfo.instagram)}
          >
            <Text style={styles.buttonText}>Instagram</Text>
          </TouchableOpacity>
        </View>

        {/* Contato */}
        <View style={styles.contactInfo}>
          <Text style={styles.sectionTitle}>Informações de contato</Text>

          <Text style={[styles.contactText, {marginTop: 15}]}>{contactInfo.phone}</Text>
          <TouchableOpacity style={styles.socialButton} onPress={handleCall}>
            <Text style={styles.buttonText}>Ligar Agora</Text>
          </TouchableOpacity>

          <Text style={[styles.contactText, {marginTop: 15}]}>WhatsApp</Text>
          <TouchableOpacity 
            style={[styles.socialButton, {backgroundColor: '#25D366'}]} 
            onPress={handleWhatsApp}
          >
            <Text style={styles.buttonText}>Enviar Mensagem</Text>
          </TouchableOpacity>

          <Text style={[styles.contactText, {marginTop: 15}]}>Site Oficial</Text>
          <TouchableOpacity 
            style={[styles.socialButton, {backgroundColor: '#6c757d'}]} 
            onPress={() => Linking.openURL(contactInfo.website)}
          >
            <Text style={styles.buttonText}>Visitar Website</Text>
          </TouchableOpacity>

          <Text style={[styles.contactText, {marginTop: 15}]}>E-mail</Text>
          <TouchableOpacity 
            style={[styles.socialButton, {backgroundColor: '#dc3545'}]} 
            onPress={handleEmail}
          >
            <Text style={styles.buttonText}>Enviar E-mail</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};