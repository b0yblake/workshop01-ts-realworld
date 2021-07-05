import { 
  ref,
  readonly,
} from 'vue'

const stateDialogTheme = ref(false) //global state
const currentThemeStyle = ref(false) //global theme
const setStateDialogTheme = (newState: boolean) => stateDialogTheme.value = newState
const setCurrentTheme = (newTheme: boolean) => currentThemeStyle.value = newTheme

const useDialogThemeState = {
  stateDialogTheme: readonly(stateDialogTheme),
  setStateDialogTheme,
  setCurrentTheme
}

export default useDialogThemeState