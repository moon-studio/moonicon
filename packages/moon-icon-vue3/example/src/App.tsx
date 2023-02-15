import { defineComponent, h } from 'vue'
import { MIcon } from '../../src/Icon'

const App = defineComponent({
  name: 'App',
  render() {
    return h(MIcon, { name: 'Delete' })
  }
})

export default App
