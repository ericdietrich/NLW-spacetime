import {Text, TouchableOpacity, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';

import {useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';
import blurBg from './src/assets/bg-blur.png';
import Stripes from './src/assets/stripes.svg';
import NLWLogo from './src/assets/nlw-spacetime-logo.svg';
import { styled } from 'nativewind';

export default function App() {
  // recebe um componente não nativo do native para passar a ser estilizado pelo nativewind
  const StyledStripes = styled(Stripes);

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })
    
  //exibe telas apenas quando as fontes foram carregadas
  if(!hasLoadedFonts) {
    return null;
  }

  return (
    <ImageBackground source={blurBg} imageStyle={{position: 'absolute', left:'-100%'}} className="flex-1 items-center relative bg-gray-900 px-8 py-10" >
      
      <StyledStripes className='absolute left-2'  />

      <View className='flex-1 items-center justify-center gap-6'>
        <NLWLogo />
        <View className='space-y-2'>
          <Text className='text-center font-title leading-tight text-2xl text-gray-50'>Sua cápsula do tempo</Text>
          <Text className='text-gray-100 text-center font-body text-base leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} className='rounded-full bg-green-500 px-5 py-2'>
          <Text className='font-alt text-sm uppercase text-blacks '>Começar a cadastrar</Text>
        </TouchableOpacity>
      </View>

      <Text className='text-gray-200 text-center font-body text-sm leading-relaxed'>Feito com 💜 no NLW da Rocketseat</Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
