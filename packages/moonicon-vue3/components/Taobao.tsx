import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '24'
  },
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
  }
}

const Taobao = defineComponent({
  name: 'Taobao',
  props,
  setup(props) {
    return () => (
      <svg
        width={props.size}
        height={props.size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M6.17999 6.47436C6.17999 7.36468 5.45561 8.08644 4.56205 8.08644C3.66849 8.08644 2.94411 7.36468 2.94411 6.47436C2.94411 5.58403 3.66849 4.86228 4.56205 4.86228C5.45561 4.86228 6.17999 5.58403 6.17999 6.47436Z" fill={props.fill}/><path d="M6.36812 8.63005C7.59098 6.88675 7.92962 5.96824 8.45639 4L11.2219 4.3749C11.0714 4.89977 10.6325 5.69331 10.4318 6.02447C11.7863 5.36839 15.3985 4.29992 18.371 5.18094C21.3435 6.06196 22.7733 8.87373 22.2465 14.441C21.7085 20.1268 18.4274 20.5251 14.3638 19.7004L14.5895 18.49C19.1235 19.4085 19.6503 16.0906 19.6503 11.8917C19.6503 7.52408 18.0135 6.56808 15.4173 6.56808C12.7066 6.56808 9.94264 7.24291 7.15828 9.32361L6.36812 8.63005Z" fill={props.fill}/><path d="M9.84653 8.90571H18.0867C18.0867 9.6718 17.4634 10.2928 16.6946 10.2928H9.84653V8.90571Z" fill={props.fill}/><path d="M2.68072 10.8982L3.79071 9.26738C4.26104 9.49232 5.22051 10.0225 6.10474 10.7295C7.46041 11.8134 7.1227 12.8229 6.63592 14.2779L6.63151 14.2911C6.3606 15.1009 5.08255 18.2151 4.50561 19.5959L1.646 18.2275C2.56785 17.2715 4.2046 15.1533 5.14526 13.7287C6.08592 12.3041 5.29577 12.0791 2.68072 10.8982Z" fill={props.fill}/><path d="M8.35002 11.7821H18.5386C18.5386 12.5477 17.9148 13.1678 17.1464 13.1659L8.21134 13.1447L8.35002 11.7821Z" fill={props.fill}/><path d="M12.125 9.88597H14.5707V16.7092H12.125V9.88597Z" fill={props.fill}/><path d="M7.89199 10.4483C8.68215 9.75475 9.4535 8.9862 10.112 7.89899L12.0309 8.18016C11.5794 8.96746 10.112 10.542 8.62571 11.2544L7.89199 10.4483Z" fill={props.fill}/><path d="M16.3956 16.353C8.30589 20.3083 7.38404 17.1966 8.24945 14.2911L10.3753 14.5535C9.90501 16.2031 10.4318 16.6342 11.5794 16.428C12.727 16.2218 14.8341 15.8657 17.9571 14.1786C17.9759 14.3785 18.0248 15.0521 18.07 16.1468C18.1151 17.2416 17.0227 17.5527 16.4708 17.5715L16.3956 16.353Z" fill={props.fill}/>
      </svg>
    )
  }
})

export default Taobao
