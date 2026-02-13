// Exemplo de composable
import { ref } from "vue";

export function useExample() {
    const value = ref(0);
    function increment() {
        value.value++;
    }
    return { value, increment };
}
