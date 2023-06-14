import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';

import {useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';
import blurBg from './src/assets/bg-blur.png';
import Stripes from './src/assets/stripes.svg';
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
    <ImageBackground source={blurBg} imageStyle={{position: 'absolute', left:'-100%'}} className="flex-1 items-center relative bg-gray-900" >
      
      <StatusBar style="light" translucent />
      <StyledStripes className='absolute left-2'  />
    </ImageBackground>
  );
}
