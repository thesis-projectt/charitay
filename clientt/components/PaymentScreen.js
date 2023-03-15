import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PaymentScreen = () => {
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState({
    complete: false,
    postalCode: '',
  });

  const handlePay = async () => {
    const { paymentIntent, error } = await confirmPayment({
      payment_method: {
        card: {
          number: cardDetails.number,
          expMonth: cardDetails.expMonth,
          expYear: cardDetails.expYear,
          cvc: cardDetails.cvc,
        },
        billing_details: {
          address: {
            postal_code: cardDetails.postalCode,
          },
        },
      },
    });

    if (error) {
      console.warn('Failed to confirm payment:', error);
      alert('Payment failed. Please try again.');
    } else if (paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded!');
      alert('Payment succeeded!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter card details:</Text>
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242',
          expMonth: 'MM',
          expYear: 'YY',
          cvc: 'CVC',
        }}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
        style={styles.cardField}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCardDetails({ ...cardDetails, postalCode: text })}
        value={cardDetails.postalCode}
        placeholder="Postal Code"
      />
      <TouchableOpacity onPress={handlePay} style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cardField: {
    width: '100%',
    height: 50,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  payButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PaymentScreen;
