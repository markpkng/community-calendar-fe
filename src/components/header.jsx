import React from 'react'
import {header} from './style_modules/header.module'

export default function Header() {
  return (
    <header className={`${header} has-background-info`}>
      <nav className='nav-bar level'>
        <div>
          <svg
            viewBox='0 0 30 33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M23.6074 11.8398L22.5703 12.5254C21.9375 11.5879 21.1113 10.8496 20.0918 10.3105C19.084 9.75977 17.9883 9.48438 16.8047 9.48438C14.8828 9.48438 13.2422 10.1641 11.8828 11.5234C10.5234 12.8828 9.84375 14.5234 9.84375 16.4453C9.84375 18.3672 10.5234 20.0078 11.8828 21.3672C13.2422 22.7266 14.8828 23.4062 16.8047 23.4062C17.9883 23.4062 19.084 23.1309 20.0918 22.5801C21.1113 22.0293 21.9375 21.2852 22.5703 20.3477L23.5898 21.0859C22.8398 22.1875 21.8672 23.0605 20.6719 23.7051C19.4766 24.3496 18.1875 24.6719 16.8047 24.6719C15.6914 24.6719 14.625 24.4551 13.6055 24.0215C12.5977 23.5879 11.7246 23.002 10.9863 22.2637C10.248 21.5254 9.66211 20.6523 9.22852 19.6445C8.79492 18.625 8.57812 17.5586 8.57812 16.4453C8.57812 15.332 8.79492 14.2715 9.22852 13.2637C9.66211 12.2441 10.248 11.3652 10.9863 10.627C11.7246 9.88867 12.5977 9.30273 13.6055 8.86914C14.625 8.43555 15.6914 8.21875 16.8047 8.21875C18.1992 8.21875 19.4941 8.54688 20.6895 9.20312C21.8848 9.84766 22.8574 10.7266 23.6074 11.8398ZM25.6992 10.3984L24.6445 11.084C23.7773 9.81836 22.6523 8.81641 21.2695 8.07812C19.8984 7.32812 18.4102 6.95312 16.8047 6.95312C15.082 6.95312 13.4941 7.38086 12.041 8.23633C10.5879 9.08008 9.43359 10.2285 8.57812 11.6816C7.73438 13.1348 7.3125 14.7227 7.3125 16.4453C7.3125 18.168 7.73438 19.7559 8.57812 21.209C9.43359 22.6621 10.5879 23.8164 12.041 24.6719C13.4941 25.5156 15.082 25.9375 16.8047 25.9375C18.4102 25.9375 19.9043 25.5625 21.2871 24.8125C22.6699 24.0625 23.7949 23.0488 24.6621 21.7715L25.6992 22.4922C24.7148 23.9453 23.4375 25.0938 21.8672 25.9375C20.3086 26.7812 18.6211 27.2031 16.8047 27.2031C14.8594 27.2031 13.0605 26.7227 11.4082 25.7617C9.75586 24.8008 8.44922 23.4941 7.48828 21.8418C6.52734 20.1895 6.04688 18.3906 6.04688 16.4453C6.04688 14.5 6.52734 12.7012 7.48828 11.0488C8.44922 9.39648 9.75586 8.08984 11.4082 7.12891C13.0605 6.16797 14.8594 5.6875 16.8047 5.6875C18.6211 5.6875 20.3086 6.10938 21.8672 6.95312C23.4375 7.79688 24.7148 8.94531 25.6992 10.3984ZM27.8086 8.99219L26.7539 9.67773C25.6523 8.06055 24.2227 6.7832 22.4648 5.8457C20.7188 4.89648 18.832 4.42188 16.8047 4.42188C15.1758 4.42188 13.6172 4.73828 12.1289 5.37109C10.6406 6.00391 9.35742 6.85938 8.2793 7.9375C7.21289 9.00391 6.36328 10.2812 5.73047 11.7695C5.09766 13.2578 4.78125 14.8164 4.78125 16.4453C4.78125 18.0742 5.09766 19.6328 5.73047 21.1211C6.36328 22.6094 7.21289 23.8926 8.2793 24.9707C9.35742 26.0371 10.6406 26.8867 12.1289 27.5195C13.6172 28.1523 15.1758 28.4688 16.8047 28.4688C18.8438 28.4688 20.7363 27.9941 22.4824 27.0449C24.2285 26.0957 25.6523 24.8125 26.7539 23.1953L27.7734 23.9512C26.5547 25.7324 24.9785 27.1445 23.0449 28.1875C21.123 29.2188 19.043 29.7344 16.8047 29.7344C14.4023 29.7344 12.1816 29.1426 10.1426 27.959C8.10352 26.7637 6.48633 25.1465 5.29102 23.1074C4.10742 21.0684 3.51562 18.8477 3.51562 16.4453C3.51562 14.043 4.10742 11.8223 5.29102 9.7832C6.48633 7.74414 8.10352 6.13281 10.1426 4.94922C12.1816 3.75391 14.4023 3.15625 16.8047 3.15625C19.0547 3.15625 21.1465 3.68359 23.0801 4.73828C25.0137 5.78125 26.5898 7.19922 27.8086 8.99219ZM29.8828 7.55078L28.8281 8.23633C27.4922 6.2793 25.7637 4.73242 23.6426 3.5957C21.5332 2.45898 19.2539 1.89062 16.8047 1.89062C14.8359 1.89062 12.9492 2.27734 11.1445 3.05078C9.35156 3.8125 7.80469 4.84375 6.50391 6.14453C5.20312 7.44531 4.16602 8.99805 3.39258 10.8027C2.63086 12.5957 2.25 14.4766 2.25 16.4453C2.25 18.4141 2.63086 20.3008 3.39258 22.1055C4.16602 23.8984 5.20312 25.4453 6.50391 26.7461C7.80469 28.0469 9.35156 29.084 11.1445 29.8574C12.9492 30.6191 14.8359 31 16.8047 31C19.2539 31 21.5391 30.4258 23.6602 29.2773C25.7812 28.1289 27.5098 26.5762 28.8457 24.6191L29.8652 25.3926C28.4121 27.502 26.5371 29.1777 24.2402 30.4199C21.9434 31.6504 19.4648 32.2656 16.8047 32.2656C14.6602 32.2656 12.6094 31.8438 10.6523 31C8.70703 30.168 7.02539 29.0488 5.60742 27.6426C4.20117 26.2246 3.07617 24.543 2.23242 22.5977C1.40039 20.6406 0.984375 18.5898 0.984375 16.4453C0.984375 14.3008 1.40039 12.2559 2.23242 10.3105C3.07617 8.35352 4.20117 6.67188 5.60742 5.26562C7.02539 3.84766 8.70703 2.72266 10.6523 1.89062C12.6094 1.04688 14.6602 0.625 16.8047 0.625C19.4766 0.625 21.9609 1.24609 24.2578 2.48828C26.5547 3.73047 28.4297 5.41797 29.8828 7.55078Z'
              fill='#FF2D2D'
            />
          </svg>
        </div>
        <div>
          <button className='navbar-item'>Community Calendar</button>
        </div>
        <h3 className='butler-font'>Butler Font</h3>
      </nav>
    </header>
  )
}
