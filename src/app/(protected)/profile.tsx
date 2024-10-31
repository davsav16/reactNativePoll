import { View, Text, Button } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import { supabase } from "../../lib/supabase";

export default function ProfileScreen() {
  const { user } = useAuth();

  return (
    <View>
      <Text>User id: {user?.id}</Text>
      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}
