import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../../styles/MintAlert.css'

import GenerateConfirm from './GenerateConfirm.js'
import GenerateCheck from './GenerateCheck.js'
import GenerateError from './GenerateError.js'
import GenerateTimer from './GenerateTimer.js'

const swal = withReactContent(Swal)

export const confirmMessage = (title, text, callback, bright) => GenerateConfirm(swal, title, text, callback, bright)
export const checkMessage = (title, callback, bright) => GenerateCheck(swal, title, callback, bright)
export const errorMessage = (title, bright) => GenerateError(swal, title, bright)
export const timerMessage = () => GenerateTimer(swal)
