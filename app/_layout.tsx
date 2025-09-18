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