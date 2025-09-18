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
        options={{ title: "Taj Mahal" }} 
      />
    </Stack>


  );
}

// import { Stack } from "expo-router";

// export default function Layout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ title: "Home",headerShown:false,}}/>

//       <Stack.Screen name="Heritage/tajmahal" options={{ title: "Taj Mahal" }} />
//       <Stack.Screen name="Heritage/qutubminar" options={{title:"Qutub Minar"}}/>
//       <Stack.Screen name="Heritage/redfort" options={{title:"Red Fort"}}/>
//       <Stack.Screen name="Heritage/indiagate" options={{title: "India Gate"}}/>
//     </Stack>


//   );
// }