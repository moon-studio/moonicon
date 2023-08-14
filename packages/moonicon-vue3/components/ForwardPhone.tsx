import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
  // stroke color
  stroke: {
    type: String as PropType<string>,
    default: '#333'
  },
  // recommended value 1.2
  strokeWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 1.2
  }
}

const ForwardPhone = defineComponent({
  name: 'ForwardPhone',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ForwardPhone">
          <path d="M17.0417 3.79175L20.2084 6.95841L17.0417 10.1251" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.875 6.95825H20.2083" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19.4166 16.395V18.77C19.4175 18.9905 19.3724 19.2087 19.284 19.4107C19.1957 19.6127 19.0662 19.7941 18.9037 19.9431C18.7412 20.0922 18.5494 20.2057 18.3406 20.2763C18.1317 20.3469 17.9104 20.3732 17.6908 20.3533C15.2547 20.0886 12.9147 19.2562 10.8587 17.9229C8.94591 16.7074 7.32419 15.0857 6.10872 13.1729C4.77078 11.1076 3.93816 8.7562 3.6783 6.30916C3.65852 6.09024 3.68454 5.8696 3.7547 5.66128C3.82486 5.45297 3.93763 5.26154 4.08582 5.0992C4.23402 4.93685 4.4144 4.80714 4.61547 4.71833C4.81654 4.62951 5.0339 4.58354 5.25372 4.58333H7.62872C8.01292 4.57955 8.38539 4.7156 8.6767 4.96613C8.96801 5.21665 9.15828 5.56456 9.21205 5.945C9.31229 6.70505 9.4982 7.45132 9.76622 8.16958C9.87273 8.45294 9.89578 8.76089 9.83264 9.05694C9.7695 9.353 9.62282 9.62475 9.40997 9.84L8.40455 10.8454C9.53153 12.8274 11.1726 14.4684 13.1546 15.5954L14.16 14.59C14.3752 14.3771 14.647 14.2305 14.943 14.1673C15.2391 14.1042 15.547 14.1272 15.8304 14.2337C16.5486 14.5018 17.2949 14.6877 18.055 14.7879C18.4395 14.8422 18.7907 15.0359 19.0418 15.3322C19.2929 15.6285 19.4263 16.0067 19.4166 16.395Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ForwardPhone }
