import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../../styles/MintAlert.css'

import GenerateConfirm from './GenerateConfirm.js'
import GenerateCheck from './GenerateCheck.js'
import GenerateError from './GenerateError.js'
import GenerateTimer from './GenerateTimer.js'

const swal = withReactContent(Swal)

export const confirmMessage = (title, text, bright) => GenerateConfirm(swal, title, text, bright)
export const checkMessage = title => GenerateCheck(swal, title)
export const errorMessage = title => GenerateError(swal, title)
export const timerMessage = () => GenerateTimer(swal)
