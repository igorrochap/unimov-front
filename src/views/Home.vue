<template>
    <header class="header">
        <div class="header-logo">
            <p>unimov</p>
        </div>
        <nav class="header-menu">
            <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#team">Equipe</a></li>
                <li><router-link to="/login" class="button-login">Login</router-link></li>
            </ul>
        </nav>
    </header>

    <main class="main-content">
        <section class="initial-section">
            <div class="initial-section-logo">
                <div>
                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_47_4448)">
                            <path
                                d="M50.0156 13.25H49.1875V8.28125C49.1875 3.64375 38.9188 0 26 0C13.0812 0 2.8125 3.64375 2.8125 8.28125V13.25H1.98438C0.612793 13.25 -0.5 14.3618 -0.5 15.7344V24.0156C-0.5 25.3872 0.612793 26.5 1.98438 26.5H2.8125V43.0625C2.8125 44.8916 4.29588 46.375 6.125 46.375V49.6875C6.125 51.5166 7.60838 53 9.4375 53H12.75C14.5791 53 16.0625 51.5166 16.0625 49.6875V46.375H35.9375V49.6875C35.9375 51.5166 37.4209 53 39.25 53H42.5625C44.3916 53 45.875 51.5166 45.875 49.6875V46.375H46.5375C48.1937 46.375 49.1875 45.05 49.1875 43.725V26.5H50.0156C51.3872 26.5 52.5 25.3872 52.5 24.0156V15.7344C52.5 14.3618 51.3872 13.25 50.0156 13.25ZM11.0938 41.4062C9.26463 41.4062 7.78125 39.9229 7.78125 38.0938C7.78125 36.2646 9.26463 34.7812 11.0938 34.7812C12.9229 34.7812 14.4062 36.2646 14.4062 38.0938C14.4062 39.9229 12.9229 41.4062 11.0938 41.4062ZM12.75 29.8125C10.9209 29.8125 9.4375 28.3291 9.4375 26.5V13.25C9.4375 11.4209 10.9209 9.9375 12.75 9.9375H39.25C41.0791 9.9375 42.5625 11.4209 42.5625 13.25V26.5C42.5625 28.3291 41.0791 29.8125 39.25 29.8125H12.75ZM40.9062 41.4062C39.0771 41.4062 37.5938 39.9229 37.5938 38.0938C37.5938 36.2646 39.0771 34.7812 40.9062 34.7812C42.7354 34.7812 44.2188 36.2646 44.2188 38.0938C44.2188 39.9229 42.7354 41.4062 40.9062 41.4062Z"
                                fill="#1E293B" />
                        </g>
                        <defs>
                            <clipPath id="clip0_47_4448">
                                <rect width="53" height="53" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div class="initial-section-logo-text">
                    <h1 class="initial-section-logo-title">unimov</h1>
                    <p class="initial-section-logo-subtitle">
                        Gestão inteligente do transporte universitário
                    </p>
                </div>
            </div>
            <div class="initial-section-text">
                <p>
                    Plataforma para gerenciamento de transporte estudantil que conecta estudantes,
                    motoristas e prefeituras de forma simples e eficiente.
                </p>
            </div>
            <div class="initial-section-buttons">
                <router-link to="/register" class="initial-section-buttons-button initial-section-buttons-register">
                    Criar conta de aluno
                </router-link>
                <router-link to="/login" class="initial-section-buttons-button initial-section-buttons-login">
                    Entrar
                </router-link>
            </div>
        </section>

        <section class="about" id="about">
            <h2 class="about-title">Sobre o unimov</h2>
            <p class="about-text">
                O unimov é uma plataforma criada para facilitar a gestão do transporte
                universitário intermunicipal, oferecendo ferramentas para organização de rotas,
                controle de embarques e acompanhamento do uso do transporte de forma simples e
                eficiente.
            </p>
        </section>

        <section class="help">
            <h1 class="help-title">Como o unimov ajuda você</h1>
            <div class="help-title-card card-blue">
                <div class="help-title-card-icon">
                    <div>
                        <svg width="76" height="40" viewBox="0 0 76 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M50.26 20.5C50.26 17.2893 50.876 14.76 52.108 12.912C53.3587 11.064 55.3653 10.14 58.128 10.14C60.8907 10.14 62.888 11.064 64.12 12.912C65.3707 14.76 65.996 17.2893 65.996 20.5C65.996 23.748 65.3707 26.296 64.12 28.144C62.888 29.992 60.8907 30.916 58.128 30.916C55.3653 30.916 53.3587 29.992 52.108 28.144C50.876 26.296 50.26 23.748 50.26 20.5ZM61.292 20.5C61.292 18.6147 61.0867 17.168 60.676 16.16C60.2653 15.1333 59.416 14.62 58.128 14.62C56.84 14.62 55.9907 15.1333 55.58 16.16C55.1693 17.168 54.964 18.6147 54.964 20.5C54.964 21.7693 55.0387 22.824 55.188 23.664C55.3373 24.4853 55.636 25.1573 56.084 25.68C56.5507 26.184 57.232 26.436 58.128 26.436C59.024 26.436 59.696 26.184 60.144 25.68C60.6107 25.1573 60.9187 24.4853 61.068 23.664C61.2173 22.824 61.292 21.7693 61.292 20.5ZM68.0216 15.012V10.56H75.7776V31H70.7936V15.012H68.0216Z"
                                fill="white" />
                            <rect width="40" height="40" rx="10" fill="#F8FAFC" />
                            <g clip-path="url(#clip0_47_4483)">
                                <path
                                    d="M19.5 9.38892C16.4796 9.38892 14.0312 11.8373 14.0312 14.8577C14.0312 17.2995 17.6055 21.75 18.9748 23.3655C19.2522 23.6927 19.7483 23.6927 20.0252 23.3655C21.3945 21.75 24.9688 17.2995 24.9688 14.8577C24.9688 11.8373 22.5204 9.38892 19.5 9.38892ZM19.5 16.6806C18.4931 16.6806 17.6771 15.8646 17.6771 14.8577C17.6771 13.8507 18.4931 13.0347 19.5 13.0347C20.5069 13.0347 21.3229 13.8507 21.3229 14.8577C21.3229 15.8646 20.5069 16.6806 19.5 16.6806ZM7.87326 18.7617C7.61553 18.8648 7.39459 19.0428 7.23894 19.2726C7.08328 19.5025 7.00006 19.7737 7 20.0512V30.9158C7 31.4071 7.49609 31.7431 7.95226 31.5608L13.9444 28.8334V18.717C13.5608 18.0235 13.247 17.3481 13.0221 16.7023L7.87326 18.7617ZM19.5 24.9996C18.8893 24.9996 18.3116 24.7314 17.9154 24.2635C17.0621 23.2565 16.1545 22.1098 15.3333 20.9336V28.8329L23.6667 31.6107V20.9341C22.8455 22.1098 21.9384 23.257 21.0846 24.2639C20.6884 24.7314 20.1107 24.9996 19.5 24.9996ZM31.0477 16.3837L25.0556 19.1111V31.6111L31.1267 29.1828C31.3845 29.0797 31.6055 28.9018 31.7611 28.6719C31.9168 28.4421 32 28.1709 32 27.8933V17.0287C32 16.5374 31.5039 16.2014 31.0477 16.3837Z"
                                    fill="#2563EB" />
                            </g>
                            <defs>
                                <clipPath id="clip0_47_4483">
                                    <rect width="25" height="25" fill="white" transform="translate(7 8)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="help-title-card-text">
                    <p class="help-title-card-text-title">Gestão de Rotas</p>
                    <p class="help-title-card-text-text">
                        Organização completa das rotas, com cadastro de pontos de embarque, destinos e
                        definição das viagens realizadas.
                    </p>
                </div>
            </div>

            <div class="help-title-card card-green">
                <div class="help-title-card-icon">
                    <div>
                        <svg width="83" height="40" viewBox="0 0 83 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M50.26 20.5C50.26 17.2893 50.876 14.76 52.108 12.912C53.3587 11.064 55.3653 10.14 58.128 10.14C60.8907 10.14 62.888 11.064 64.12 12.912C65.3707 14.76 65.996 17.2893 65.996 20.5C65.996 23.748 65.3707 26.296 64.12 28.144C62.888 29.992 60.8907 30.916 58.128 30.916C55.3653 30.916 53.3587 29.992 52.108 28.144C50.876 26.296 50.26 23.748 50.26 20.5ZM61.292 20.5C61.292 18.6147 61.0867 17.168 60.676 16.16C60.2653 15.1333 59.416 14.62 58.128 14.62C56.84 14.62 55.9907 15.1333 55.58 16.16C55.1693 17.168 54.964 18.6147 54.964 20.5C54.964 21.7693 55.0387 22.824 55.188 23.664C55.3373 24.4853 55.636 25.1573 56.084 25.68C56.5507 26.184 57.232 26.436 58.128 26.436C59.024 26.436 59.696 26.184 60.144 25.68C60.6107 25.1573 60.9187 24.4853 61.068 23.664C61.2173 22.824 61.292 21.7693 61.292 20.5ZM68.3576 27.164C68.9923 26.66 69.2816 26.4267 69.2256 26.464C71.055 24.952 72.4923 23.7107 73.5376 22.74C74.6016 21.7693 75.4976 20.752 76.2256 19.688C76.9536 18.624 77.3176 17.588 77.3176 16.58C77.3176 15.8147 77.1403 15.2173 76.7856 14.788C76.431 14.3587 75.899 14.144 75.1896 14.144C74.4803 14.144 73.9203 14.4147 73.5096 14.956C73.1176 15.4787 72.9216 16.2253 72.9216 17.196H68.3016C68.339 15.6093 68.675 14.284 69.3096 13.22C69.963 12.156 70.8123 11.372 71.8576 10.868C72.9216 10.364 74.0976 10.112 75.3856 10.112C77.607 10.112 79.2776 10.6813 80.3976 11.82C81.5363 12.9587 82.1056 14.4427 82.1056 16.272C82.1056 18.2693 81.4243 20.1267 80.0616 21.844C78.699 23.5427 76.963 25.204 74.8536 26.828H82.4136V30.72H68.3576V27.164Z"
                                fill="white" />
                            <rect width="40" height="40" rx="10" fill="#F8FAFC" />
                            <path
                                d="M8.5625 18.9375H17.9375V9.5625H8.5625V18.9375ZM11.6875 12.6875H14.8125V15.8125H11.6875V12.6875ZM21.0625 9.5625V18.9375H30.4375V9.5625H21.0625ZM27.3125 15.8125H24.1875V12.6875H27.3125V15.8125ZM8.5625 31.4375H17.9375V22.0625H8.5625V31.4375ZM11.6875 25.1875H14.8125V28.3125H11.6875V25.1875ZM28.875 22.0625H30.4375V28.3125H25.75V26.75H24.1875V31.4375H21.0625V22.0625H25.75V23.625H28.875V22.0625ZM28.875 29.875H30.4375V31.4375H28.875V29.875ZM25.75 29.875H27.3125V31.4375H25.75V29.875Z"
                                fill="#1EAE53" />
                        </svg>
                    </div>
                </div>
                <div class="help-title-card-text">
                    <p class="help-title-card-text-title">Confirmação de Embarque</p>
                    <p class="help-title-card-text-text">
                        Os estudantes confirmam sua presença nas viagens através de QR Code,
                        garantindo mais agilidade e controle.
                    </p>
                </div>
            </div>

            <div class="help-title-card card-gray">
                <div class="help-title-card-icon">
                    <div>
                        <svg width="83" height="40" viewBox="0 0 83 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M50.26 20.5C50.26 17.2893 50.876 14.76 52.108 12.912C53.3587 11.064 55.3653 10.14 58.128 10.14C60.8907 10.14 62.888 11.064 64.12 12.912C65.3707 14.76 65.996 17.2893 65.996 20.5C65.996 23.748 65.3707 26.296 64.12 28.144C62.888 29.992 60.8907 30.916 58.128 30.916C55.3653 30.916 53.3587 29.992 52.108 28.144C50.876 26.296 50.26 23.748 50.26 20.5ZM61.292 20.5C61.292 18.6147 61.0867 17.168 60.676 16.16C60.2653 15.1333 59.416 14.62 58.128 14.62C56.84 14.62 55.9907 15.1333 55.58 16.16C55.1693 17.168 54.964 18.6147 54.964 20.5C54.964 21.7693 55.0387 22.824 55.188 23.664C55.3373 24.4853 55.636 25.1573 56.084 25.68C56.5507 26.184 57.232 26.436 58.128 26.436C59.024 26.436 59.696 26.184 60.144 25.68C60.6107 25.1573 60.9187 24.4853 61.068 23.664C61.2173 22.824 61.292 21.7693 61.292 20.5ZM68.6936 16.328C68.7683 14.3307 69.4216 12.7907 70.6536 11.708C71.8856 10.6253 73.5563 10.084 75.6656 10.084C77.0656 10.084 78.2603 10.3267 79.2496 10.812C80.2576 11.2973 81.0136 11.96 81.5176 12.8C82.0403 13.64 82.3016 14.5827 82.3016 15.628C82.3016 16.86 81.9936 17.868 81.3776 18.652C80.7616 19.4173 80.043 19.94 79.2216 20.22V20.332C80.2856 20.6867 81.1256 21.2747 81.7416 22.096C82.3576 22.9173 82.6656 23.972 82.6656 25.26C82.6656 26.4173 82.395 27.444 81.8536 28.34C81.331 29.2173 80.5563 29.908 79.5296 30.412C78.5216 30.916 77.3176 31.168 75.9176 31.168C73.6776 31.168 71.8856 30.6173 70.5416 29.516C69.2163 28.4147 68.5163 26.7533 68.4416 24.532H73.0896C73.1083 25.3533 73.3416 26.0067 73.7896 26.492C74.2376 26.9587 74.891 27.192 75.7496 27.192C76.4776 27.192 77.0376 26.9867 77.4296 26.576C77.8403 26.1467 78.0456 25.5867 78.0456 24.896C78.0456 24 77.7563 23.356 77.1776 22.964C76.6176 22.5533 75.7123 22.348 74.4616 22.348H73.5656V18.456H74.4616C75.4136 18.456 76.179 18.2973 76.7576 17.98C77.355 17.644 77.6536 17.056 77.6536 16.216C77.6536 15.544 77.467 15.0213 77.0936 14.648C76.7203 14.2747 76.207 14.088 75.5536 14.088C74.8443 14.088 74.3123 14.3027 73.9576 14.732C73.6216 15.1613 73.4256 15.6933 73.3696 16.328H68.6936Z"
                                fill="white" />
                            <rect width="40" height="40" rx="10" fill="#F8FAFC" />
                            <g clip-path="url(#clip0_47_4465)">
                                <path
                                    d="M31.2188 26.75H10.125V11.9062C10.125 11.4746 9.77539 11.125 9.34375 11.125H7.78125C7.34961 11.125 7 11.4746 7 11.9062V28.3125C7 29.1753 7.69971 29.875 8.5625 29.875H31.2188C31.6504 29.875 32 29.5254 32 29.0938V27.5312C32 27.0996 31.6504 26.75 31.2188 26.75ZM29.6562 12.6875H23.8916C22.8477 12.6875 22.3247 13.9497 23.063 14.688L24.645 16.27L21.0625 19.853L17.48 16.2705C16.8696 15.6602 15.8804 15.6602 15.2705 16.2705L11.9165 19.6245C11.6113 19.9297 11.6113 20.4243 11.9165 20.7295L13.021 21.834C13.3262 22.1392 13.8208 22.1392 14.126 21.834L16.375 19.5845L19.9575 23.167C20.5679 23.7773 21.5571 23.7773 22.167 23.167L26.8545 18.4795L28.4365 20.0615C29.1748 20.7998 30.437 20.2769 30.437 19.2329V13.4688C30.4375 13.0371 30.0879 12.6875 29.6562 12.6875Z"
                                    fill="#9CA8BF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_47_4465">
                                    <rect width="25" height="25" fill="white" transform="translate(7 8)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="help-title-card-text">
                    <p class="help-title-card-text-title">Monitoramento do Transporte</p>
                    <p class="help-title-card-text-text">
                        Prefeituras podem acompanhar a ocupação dos veículos, frequência dos
                        estudantes e dados das rotas em tempo real.
                    </p>
                </div>
            </div>
        </section>

        <section class="team" id="team">
            <h1 class="team-title">Quem Somos</h1>
            <div class="team-image">
                <div class="team-image-bg"></div>
                <div class="team-image-wrapper">
                    <img src="@/assets/team-img.png" alt="Imagem da equipe do unimov" />
                </div>
            </div>
            <p class="team-text">
                O unimov é um projeto acadêmico desenvolvido por estudantes de Sistemas de
                Informação do Instituto Federal de Alagoas.
            </p>
        </section>

        <section class="reason">
            <svg width="25" height="35" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.5666 31.0591C6.56729 31.4891 6.69443 31.9102 6.93301 32.2684L8.10127 34.0246C8.30084 34.3248 8.57153 34.571 8.88925 34.7413C9.20697 34.9116 9.56187 35.0007 9.92236 35.0007H14.1408C14.5013 35.0007 14.8562 34.9116 15.1739 34.7413C15.4917 34.571 15.7623 34.3248 15.9619 34.0246L17.1302 32.2684C17.3686 31.9102 17.4961 31.4895 17.4966 31.0591L17.4993 28.4376H6.56318L6.5666 31.0591ZM0 12.0313C0 15.0644 1.12451 17.8316 2.97773 19.946C4.10703 21.2345 5.87344 23.9265 6.54678 26.1974C6.54951 26.2152 6.55156 26.233 6.5543 26.2507H17.5082C17.5109 26.233 17.513 26.2159 17.5157 26.1974C18.1891 23.9265 19.9555 21.2345 21.0848 19.946C22.938 17.8316 24.0625 15.0644 24.0625 12.0313C24.0625 5.37379 18.656 -0.0204495 11.9937 5.82817e-05C5.02031 0.0212497 0 5.67184 0 12.0313ZM12.0312 6.56256C9.01592 6.56256 6.5625 9.01598 6.5625 12.0313C6.5625 12.6356 6.07305 13.1251 5.46875 13.1251C4.86445 13.1251 4.375 12.6356 4.375 12.0313C4.375 7.80943 7.80938 4.37506 12.0312 4.37506C12.6355 4.37506 13.125 4.86451 13.125 5.46881C13.125 6.07311 12.6355 6.56256 12.0312 6.56256Z"
                    fill="#F8FAFC" />
            </svg>
            <p>A iniciativa surgiu com o objetivo de aplicar, na prática, nossos conhecimentos em engenharia de software
                para criar uma solução digital que contribua para melhorar a organização do transporte universitário
                intermunicipal.</p>
        </section>

        <section class="developers">
            <h1>Conheça os desenvolvedores</h1>
            <div class="carousel-wrapper">
                <ul class="carousel">
                    <li>
                        <div>
                            <img src="@/assets/team-profile-pics/malu-profile-pic.png" alt="Foto da Malu" />
                            <p class="developers-name">Maria Luísa</p>
                            <p class="developers-role">Gerente de Projeto e Desenvolvedora Back-end</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/team-profile-pics/igor-profile-pic.png" alt="Foto da Malu" />
                            <p class="developers-name">Igor Rocha</p>
                            <p class="developers-role">Líder técnico e Desenvolvedor Back-end</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/team-profile-pics/isaque-profile-pic.png" alt="Foto da Malu" />
                            <p class="developers-name">Isaque Braga</p>
                            <p class="developers-role">Desenvolvedor Front-end e Tester</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/team-profile-pics/renilson-profile-pic.png" alt="Foto da Malu" />
                            <p class="developers-name">Renilson José</p>
                            <p class="developers-role">Designer e desenvolvedor Front-end</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/team-profile-pics/andrezza-profile-pic.png" alt="Foto da Malu" />
                            <p class="developers-name">Andrezza Abreu</p>
                            <p class="developers-role">Desenvolvedora Front-end e Designer</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/team-profile-pics/eduardo-profile-pic.png" alt="Foto da Malu" />
                            <p class="developers-name">Eduardo Calado</p>
                            <p class="developers-role">Tester e Desenvolvedor Back-end</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="footer-header">
            <h1>Pronto para usar o unimov?</h1>
            <p>Cadastre-se e comece a gerenciar ou utilizar o transporte universitário de forma simples.</p>
            <div class="footer-header-buttons">
                <router-link to="/register" class="footer-header-buttons-button footer-header-buttons-register">Criar
                    conta de aluno</router-link>
                <router-link to="/login" class="footer-header-buttons-button footer-header-buttons-login">Acessar
                    Sistema</router-link>
            </div>
        </div>

        <div class="footer-main-content">
            <div class="footer-main-content-top">
                <h1>unimov</h1>
                <p>Sistema para gestão do transporte universitário intermunicipal.</p>
            </div>
            <div class="footer-main-content-middle">
                <p>NAVEGAÇÃO</p>
                <nav>
                    <ul>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#team">Equipe</a></li>
                        <li><router-link to="/register">Cadastro</router-link></li>
                        <li><router-link to="/login">Login</router-link></li>
                    </ul>
                </nav>
            </div>
            <div class="footer-main-content-bottom">
                <p class="footer-main-content-bottom-title">CONTATO</p>
                <div>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_47_4566" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="1"
                            width="13" height="11">
                            <path
                                d="M2.16667 1.08325C1.59203 1.08325 1.04093 1.31153 0.634602 1.71785C0.228273 2.12418 0 2.67528 0 3.24992V3.46767L6.5 6.96792L13 3.46875V3.24992C13 2.67528 12.7717 2.12418 12.3654 1.71785C11.9591 1.31153 11.408 1.08325 10.8333 1.08325H2.16667ZM13 4.69833L6.75675 8.05992C6.67784 8.1024 6.58962 8.12463 6.5 8.12463C6.41038 8.12463 6.32216 8.1024 6.24325 8.05992L0 4.69833V9.74992C0 10.3246 0.228273 10.8757 0.634602 11.282C1.04093 11.6883 1.59203 11.9166 2.16667 11.9166H10.8333C11.408 11.9166 11.9591 11.6883 12.3654 11.282C12.7717 10.8757 13 10.3246 13 9.74992V4.69833Z"
                                fill="#006FFD" />
                        </mask>
                        <g mask="url(#mask0_47_4566)">
                            <rect y="-0.000488281" width="13" height="13" fill="#F8FAFC" />
                        </g>
                    </svg>
                    <p>unimov@gmail.com</p>
                </div>
            </div>
        </div>

        <div class="footer-footer">
            <div>
                <p>© 2026 unimov Todos os direitos reservados.</p>
            </div>
            <div>
                <ul>
                    <li>Termos de Uso</li>
                    <li>Privacidade</li>
                    <li>Acessibilidade</li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.header {
    width: 100vw;
    height: 5rem;
    padding: 0px 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--light-blue);
    color: var(--white);
}

.header-logo p {
    font-size: 1.5rem;
    font-weight: 700;
}

.header-menu ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.header-menu li {
    list-style: none;
    font-size: 0.875rem;
    font-weight: 600;
}

.header-menu li a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}

.header-menu .button-login {
    padding: 0.6rem 1.1rem;
    background-color: #f8fafc;
    color: #1e293b;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
}

.header-menu button a,
.header-menu button a:visited {
    text-decoration: none;
    color: inherit;
}

.initial-section {
    display: flex;
    flex-direction: column;
    padding: 0px 1rem;
    gap: 1.5em;
    margin-top: 3rem;
}

.initial-section-logo {
    display: flex;
    align-items: stretch;
    gap: 0.5rem;
}

.initial-section-logo-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 53px;
    line-height: 1;
    color: #1e293b;
}

.initial-section-logo-title {
    font-size: 2rem;
    font-weight: 700;
}

.initial-section-logo-subtitle {
    font-size: 0.75rem;
    font-weight: 500;
}

.initial-section-text {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--black);
}

.initial-section-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.initial-section-buttons-button {
    width: 65%;
    height: 3.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    font-family: "Poppins";
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: "Poppins";
}

.initial-section-buttons-register {
    background-color: #1eae53;
    color: var(--white);
}

.initial-section-buttons-login {
    background-color: var(--white);
    border: 2px solid #9ca8bf;
    color: #9ca8bf;
}

.about {
    margin-top: 3rem;
    padding: 1.5rem 1rem;
    background-color: var(--light-blue);
    color: var(--white);
}

.about-title {
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid white;
    width: fit-content;
}

.about-text {
    font-size: 0.8125rem;
    font-weight: 400;
    padding-top: 0.8rem;
}

.help {
    margin-top: 3rem;
    padding: 0 1rem;
}

.help h1 {
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1rem;
}

.help-title-card {
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color: var(--white);
}

.help-title-card-text-title {
    font-weight: 700;
    font-size: 0.75rem;
    padding-top: 0.25rem;
}

.help-title-card-text-text {
    font-weight: 400;
    font-size: 0.625rem;
    padding-top: 0.25rem;
}

.card-blue {
    background-color: var(--light-blue);
}

.card-green {
    background-color: #1eae53;
}

.card-gray {
    background-color: #9ca8bf;
}

.team {
    margin-top: 3rem;
    text-align: center;
}

.team-title {
    font-weight: 700;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: #1e293b;
}

.team-image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    position: relative;
}

.team-image-bg {
    background-color: #ced4df;
    width: 100vw;
    height: 9.5625rem;
    z-index: 1;
    position: absolute;
}

.team-image-wrapper {
    filter: drop-shadow(0px 0px 4px #00000040);
    position: relative;
    z-index: 2;
    width: 100%;
}

.team-image img {
    width: 100%;
    border-radius: 8px;
    clip-path: inset(6px round 8px);
}

.team-text {
    font-weight: 400;
    font-size: 0.875rem;
    margin-top: 0, 5rem;
    padding: 0 1rem;
    color: #1e293b;
}

.reason {
    background-color: #1EAE53;
    padding: 1.5rem 1rem;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.reason p {
    font-weight: 400;
    font-size: 0.75rem;
    color: #F8FAFC;
    text-align: center;
}

.developers {
    margin-top: 1rem;
    text-align: center;
}

.developers h1 {
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
}

.carousel-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carousel {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    width: 100%;
    list-style: none;
    margin: 0;
}

.carousel::-webkit-scrollbar {
    display: none;
}

.developers ul li div {
    width: 8.3125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
}

.developers ul li img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

.developers-name {
    font-weight: 600;
    font-size: 0.9375rem;
}

.developers-role {
    font-weight: 400;
    font-size: 0.6875rem;
    padding: 0 0.5rem;
}

.footer {
    background-color: #1E293B;
    color: #F8FAFC;
    margin-top: 2rem;
    padding: 1.5rem 1rem;
}

.footer-header h1 {
    font-weight: 700;
    font-size: 0.875rem;
    text-align: center;
}

.footer-header p {
    font-weight: 400;
    font-size: 0.75rem;
    text-align: center;
    padding: 0 2rem;
    margin-top: 0.2rem;
}

.footer-header-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
}

.footer-header-buttons-button {
    width: 55%;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    font-family: "Poppins";
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: "Poppins";
}

.footer-header-buttons-register {
    background-color: #F8FAFC;
    color: #1E293B;
}

.footer-header-buttons-login {
    border: 2px solid #F8FAFC;
    color: #F8FAFC;
}

.footer-main-content {
    border-top: 1px solid #CED4DF;
    border-bottom: 1px solid #CED4DF;
    margin: 2rem 0 1rem 0;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.footer-main-content-top h1 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1;
}

.footer-main-content-top p {
    font-weight: 400;
    font-size: 0.625rem;
    padding-top: 0.2rem;
}

.footer-main-content-middle p {
    font-weight: 600;
    font-size: 0.75rem;
}

.footer-main-content-middle nav ul {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-top: 0.2rem;
}

.footer-main-content-middle nav ul li {
    list-style: none;
    line-height: 1;
    font-family: Poppins;
    font-weight: 400;
    font-size: 0.625rem;
}

.footer-main-content-middle nav ul li a {
    color: #F8FAFC;
    text-decoration: none;
}

.footer-main-content-bottom-title {
    font-weight: 600;
    font-size: 0.75rem;
}

.footer-main-content-bottom div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-weight: 400;
    font-size: 0.625rem;
    margin-top: 0.2rem;
}

.footer-footer div p {
    font-weight: 275;
    font-size: 0.625rem;
}

.footer-footer div ul {
    display: flex;
    font-weight: 275;
    font-size: 0.625rem;
    text-align: center;
    justify-content: space-evenly;
    list-style: none;
    margin-top: 1rem;
}
</style>
