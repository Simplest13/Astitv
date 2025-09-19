import { Stack } from "expo-router";


export default function Layout() {
  return (
    <Stack>
      {/* Home page (index.tsx) */}
      <Stack.Screen 
        name="index" 
        options={{ title: "Home",
          headerShown:false,
        }}
        />
      <Stack.Screen 
        name="Heritage/Tajmahal" 
        options={{ title: "Taj Mahal",
          headerShown:false,
        }} 
        
      />
      <Stack.Screen name="Heritage/Qutubminar" options={{title:"Qutub Minar",
      headerShown:false,      
      }}/>
      <Stack.Screen name="Heritage/Redfort" options={{title:"Red Fort",
        headerShown:false
      }}/>
      <Stack.Screen name="Heritage/Indiagate" options={{title: "India Gate",
        headerShown:false
      }}/>
    </Stack>
  );
}
