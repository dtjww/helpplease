
import './styles/quasar.scss'
import '@quasar/extras/material-icons/material-icons.css'
import { Notify, Loading } from 'quasar'
// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: { Notify, Loading }
}