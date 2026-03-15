<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CustomSelect from '@/components/CustomSelect.vue'

const router = useRouter()

const nomeCompleto = ref('')
const email = ref('')
const telefone = ref('')
const senha = ref('')
const confirmarSenha = ref('')
const municipio = ref('')
const instituicao = ref('')
const rgFile = ref<File | null>(null)
const residenciaFile = ref<File | null>(null)
const fotoFile = ref<File | null>(null)
const matriculaFile = ref<File | null>(null)
const aceitaTermos = ref(false)
const senhaVisivel = ref(false)
const confirmarSenhaVisivel = ref(false)

// substituir por chamada ao backend quando disponível
const municipios = [
    { value: 'maceio', label: 'Maceió' },
    { value: 'arapiraca', label: 'Arapiraca' },
    { value: 'palmeira', label: 'Palmeira dos Índios' },
    { value: 'uniao', label: 'União dos Palmares' },
]

const instituicoes = [
    { value: 'ifal', label: 'IFAL' },
    { value: 'ufal', label: 'UFAL' },
    { value: 'unit', label: 'UNIT' },
    { value: 'cesmac', label: 'CESMAC' },
]

function maskTelefone(event: Event) {
    const input = event.target as HTMLInputElement
    let value = input.value.replace(/\D/g, '').slice(0, 11)

    if (value.length <= 10) {
        value = value
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
    } else {
        value = value
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
    }

    telefone.value = value
    input.value = value
}

function handleFileChange(event: Event, field: 'rg' | 'residencia' | 'foto' | 'matricula') {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0] ?? null
    if (field === 'rg') rgFile.value = file
    if (field === 'residencia') residenciaFile.value = file
    if (field === 'foto') fotoFile.value = file
    if (field === 'matricula') matriculaFile.value = file
}

function triggerFileInput(id: string) {
    document.getElementById(id)?.click()
}

function handleSubmit() {
    // lógica de submit aqui
}
</script>

<template>
    <form class="register-form" @submit.prevent="handleSubmit">

        <section class="register-form-section">
            <h2 class="register-form-section-title">Informações pessoais</h2>

            <div class="register-form-field">
                <label class="register-form-label">Nome completo</label>
                <input v-model="nomeCompleto" class="register-form-input" type="text"
                    placeholder="Digite seu nome completo" />
            </div>

            <div class="register-form-field">
                <label class="register-form-label">E-mail</label>
                <input v-model="email" class="register-form-input" type="email" placeholder="seuemail@exemplo.com" />
            </div>

            <div class="register-form-field">
                <label class="register-form-label">Telefone</label>
                <input :value="telefone" class="register-form-input" type="tel" placeholder="(00) 00000-0000"
                    maxlength="15" @input="maskTelefone" />
            </div>

            <div class="register-form-field">
                <label class="register-form-label">Senha</label>
                <div class="register-form-input-wrapper">
                    <input v-model="senha" class="register-form-input" :type="senhaVisivel ? 'text' : 'password'"
                        placeholder="Digite uma senha" />
                    <button type="button" class="register-form-eye" @click="senhaVisivel = !senhaVisivel">
                        <svg v-if="!senhaVisivel" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                                stroke="#9CA8BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="12" cy="12" r="3" stroke="#9CA8BF" stroke-width="2" />
                        </svg>
                        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06"
                                stroke="#9CA8BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.94 15.94"
                                stroke="#9CA8BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.12 14.12A3 3 0 1 1 9.88 9.88" stroke="#9CA8BF" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 3L21 21" stroke="#9CA8BF" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="register-form-field">
                <label class="register-form-label">Confirme sua senha</label>
                <div class="register-form-input-wrapper">
                    <input v-model="confirmarSenha" class="register-form-input"
                        :type="confirmarSenhaVisivel ? 'text' : 'password'" placeholder="Confirme sua senha" />
                    <button type="button" class="register-form-eye"
                        @click="confirmarSenhaVisivel = !confirmarSenhaVisivel">
                        <svg v-if="!confirmarSenhaVisivel" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                                stroke="#9CA8BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="12" cy="12" r="3" stroke="#9CA8BF" stroke-width="2" />
                        </svg>
                        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06"
                                stroke="#9CA8BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.94 15.94"
                                stroke="#9CA8BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.12 14.12A3 3 0 1 1 9.88 9.88" stroke="#9CA8BF" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 3L21 21" stroke="#9CA8BF" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <section class="register-form-section">
            <h2 class="register-form-section-title">Informações da rota</h2>

            <div class="register-form-field">
                <label class="register-form-label">Município</label>
                <CustomSelect v-model="municipio" :options="municipios" placeholder="Selecione seu município" />
            </div>

            <div class="register-form-field">
                <label class="register-form-label">Instituição de Ensino</label>
                <CustomSelect v-model="instituicao" :options="instituicoes"
                    placeholder="Selecione sua Instituição de Ensino" />
            </div>
        </section>

        <section class="register-form-section">
            <h2 class="register-form-section-title">Documentos</h2>

            <div class="register-form-field">
                <label class="register-form-label">RG</label>
                <p class="register-form-file-hint">Faça upload de 1 arquivo PDF ou imagem</p>
                <input id="rg-input" type="file" accept=".pdf,image/*" hidden
                    @change="handleFileChange($event, 'rg')" />
                <button type="button" class="register-form-file-btn" @click="triggerFileInput('rg-input')">
                    <span v-if="rgFile">{{ rgFile.name }}</span>
                    <span v-else class="register-form-file-placeholder">Selecionar arquivo</span>
                </button>
            </div>

            <div class="register-form-field">
                <label class="register-form-label">Comprovante de residência</label>
                <p class="register-form-file-hint">Faça upload de 1 arquivo PDF ou imagem</p>
                <input id="residencia-input" type="file" accept=".pdf,image/*" hidden
                    @change="handleFileChange($event, 'residencia')" />
                <button type="button" class="register-form-file-btn" @click="triggerFileInput('residencia-input')">
                    <span v-if="residenciaFile">{{ residenciaFile.name }}</span>
                    <span v-else class="register-form-file-placeholder">Selecionar arquivo</span>
                </button>
            </div>

            <div class="register-form-field">
                <label class="register-form-label">Foto 3x4</label>
                <p class="register-form-file-hint">Faça upload de 1 arquivo imagem</p>
                <input id="foto-input" type="file" accept="image/*" hidden @change="handleFileChange($event, 'foto')" />
                <button type="button" class="register-form-file-btn" @click="triggerFileInput('foto-input')">
                    <span v-if="fotoFile">{{ fotoFile.name }}</span>
                    <span v-else class="register-form-file-placeholder">Selecionar arquivo</span>
                </button>
            </div>

            <div class="register-form-field">
                <label class="register-form-label">Comprovante de matrícula</label>
                <p class="register-form-file-hint">Faça upload de 1 arquivo PDF ou imagem</p>
                <input id="matricula-input" type="file" accept=".pdf,image/*" hidden
                    @change="handleFileChange($event, 'matricula')" />
                <button type="button" class="register-form-file-btn" @click="triggerFileInput('matricula-input')">
                    <span v-if="matriculaFile">{{ matriculaFile.name }}</span>
                    <span v-else class="register-form-file-placeholder">Selecionar arquivo</span>
                </button>
            </div>
        </section>

        <label class="register-form-terms">
            <input v-model="aceitaTermos" type="checkbox" class="register-form-checkbox" />
            <span>Aceito os <a href="#" class="register-form-link">termos de uso</a> e <a href="#"
                    class="register-form-link">política de privacidade</a></span>
        </label>

        <button type="submit" class="register-form-submit">
            Enviar cadastro
        </button>

        <p class="register-form-login-link">
            Já possui conta?
            <router-link to="/login" class="register-form-link">Entrar</router-link>
        </p>

    </form>
</template>

<style scoped>
.register-form {
    display: flex;
    flex-direction: column;
}

.register-form-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 12px;
    padding: 1.25rem 1rem;
}

.register-form-section-title {
    font-size: 1.250rem;
    font-weight: 600;
    color: #000000;
    text-align: center;
    margin: 0;
}

.register-form-field {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
}

.register-form-label {
    font-size: 1rem;
    font-weight: 500;
    color: #1E293B;
}

.register-form-input {
    padding: 0.875rem 1rem;
    border: 1.5px solid #CED4DF;
    border-radius: 8px;
    font-size: 0.750rem;
    font-weight: 400;
    font-family: 'Poppins';
    color: #1E293B;
    background: #FFF;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.register-form-input::placeholder {
    color: #9CA8BF;
}

.register-form-input:focus {
    border-color: #1656DF;
    box-shadow: 0 0 0 3px rgba(22, 86, 223, 0.12);
}

.register-form-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.register-form-input-wrapper .register-form-input {
    width: 100%;
    padding-right: 3rem;
}

.register-form-eye {
    position: absolute;
    right: 0.75rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    transition: opacity 0.2s ease;
}

.register-form-eye:hover {
    opacity: 0.6;
}

.register-form-file-hint {
    font-size: 0.6875rem;
    color: #9CA8BF;
    margin: 0;
}

.register-form-file-btn {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 1.5px dashed #CED4DF;
    border-radius: 8px;
    background: #FFF;
    font-size: 0.8125rem;
    font-family: 'Poppins', sans-serif;
    color: #1E293B;
    cursor: pointer;
    text-align: left;
    transition: border-color 0.2s ease, background 0.2s ease;
    min-height: 3rem;
}

.register-form-file-btn:hover {
    border-color: #2563EB;
    background: #F0F4FF;
}

.register-form-file-placeholder {
    color: #9CA8BF;
}

.register-form-terms {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: #1E293B;
    cursor: pointer;
    margin-bottom: 1rem;
}

.register-form-checkbox {
    margin-top: 2px;
    accent-color: #2563EB;
    flex-shrink: 0;
}

.register-form-link {
    color: #2563EB;
    text-decoration: none;
    font-weight: 600;
}

.register-form-link:hover {
    text-decoration: underline;
}

.register-form-submit {
    margin: 0 auto;
    width: 90%;
    height: 3.25rem;
    background-color: #2563EB;
    color: #FFF;
    border: none;
    border-radius: 8px;
    font-size: 1.125rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: filter 0.2s ease, transform 0.2s ease;
    margin-bottom: 1rem;
}

.register-form-submit:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
}

.register-form-login-link {
    text-align: center;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #64748B;
    margin: 0;
}
</style>