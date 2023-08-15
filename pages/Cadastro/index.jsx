import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import {
    useFonts,
    JustAnotherHand_400Regular,
  } from "@expo-google-fonts/just-another-hand";
  import { JosefinSlab_400Regular } from "@expo-google-fonts/josefin-slab";
import { TemaContext } from '../../common/Tema';

export default function Cadastro(){

    const {tema,setTema,corLetra,setCorLetra} =useContext(TemaContext);
    return (
        <View>
            <Text>  Estamos Na Cadastro</Text>
    
        </View>
    )

}