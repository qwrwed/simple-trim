import { ThemedView } from '../app-example/components/themed-view';
import { ThemedText } from '../app-example/components/themed-text';

export default function Index() {
  return (
    <ThemedView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
    </ThemedView>
  );
}
