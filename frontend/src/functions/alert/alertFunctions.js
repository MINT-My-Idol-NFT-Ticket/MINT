import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../../styles/MintAlert.css'

import generateConfirm from './generateConfirm.js'
import generateConfirmNoBtn from './generateConfirmNoBtn.js'
import generateCheck from './generateCheck.js'
import generateError from './generateError.js'
import generateTimer from './generateTimer.js'

const swal = withReactContent(Swal)

export const confirmMessage = (title, text, callback, bright) => generateConfirm(swal, title, text, callback, bright)
export const confirmMessageNoBtn = (title, callback, bright) => generateConfirmNoBtn(swal, title, callback, bright)
export const checkMessage = (title, callback, bright) => generateCheck(swal, title, callback, bright)
export const errorMessage = (title, text, callback, bright) => generateError(swal, title, text, callback, bright)
export const timerMessage = (title, text, callback, bright) => generateTimer(swal, title, text, callback, bright)
