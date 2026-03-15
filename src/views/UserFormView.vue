<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LoginForm from '@/components/UserFormView/LoginForm.vue'
import RegisterForm from '@/components/UserFormView/RegisterForm.vue'

type Tab = 'login' | 'cadastro'

const route = useRoute()
const router = useRouter()
const activeTab = ref<Tab>(route.path === '/login' ? 'login' : 'cadastro')

watchEffect(() => {
    activeTab.value = route.path === '/login' ? 'login' : 'cadastro'
})

function goBack() {
    router.push('/')
}
</script>

<template>
    <div class="user-form-view">
        <div class="user-form-view-bg"></div>

        <header class="user-form-header">
            <button class="user-form-header-back" @click="goBack">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.54541 11.937L6.89502 12.5874C6.61963 12.8628 6.17432 12.8628 5.90186 12.5874L0.206543 6.89502C-0.0688477 6.61963 -0.0688477 6.17432 0.206543 5.90186L5.90186 0.206543C6.17725 -0.0688477 6.62256 -0.0688477 6.89502 0.206543L7.54541 0.856934C7.82373 1.13525 7.81787 1.58936 7.53369 1.86182L4.00342 5.2251H12.4233C12.813 5.2251 13.1265 5.53857 13.1265 5.92822V6.86572C13.1265 7.25537 12.813 7.56885 12.4233 7.56885H4.00342L7.53369 10.9321C7.8208 11.2046 7.82666 11.6587 7.54541 11.937Z"
                        fill="#F8FAFC" />
                </svg>
                Voltar
            </button>

            <h1 class="user-form-header-title">
                {{ activeTab === 'cadastro' ? 'Criar conta de aluno' : 'Entrar na plataforma' }}
            </h1>
            <p class="user-form-header-subtitle">
                {{ activeTab === 'cadastro'
                    ? 'Preencha seus dados para solicitar acesso ao transporte.'
                    : 'Entre com seus dados para acessar o sistema.' }}
            </p>
        </header>

        <div class="user-form-card">
            <div class="user-form-tabs">
                <button class="user-form-tab" :class="{ 'user-form-tab-active': activeTab === 'login' }"
                    @click="router.push('/login')">
                    Login
                </button>
                <button class="user-form-tab" :class="{ 'user-form-tab-active': activeTab === 'cadastro' }"
                    @click="router.push('/register')">
                    Cadastro
                </button>
            </div>

            <LoginForm v-if="activeTab === 'login'" />
            <RegisterForm v-if="activeTab === 'cadastro'" />
        </div>

    </div>
</template>

<style scoped>
.user-form-view {
    min-height: 100vh;
    background-color: #CED4DF;
    display: flex;
    flex-direction: column;
    position: relative;
}

.user-form-view-bg {
    position: absolute;
    width: 100%;
    height: 350px;
    background-color: #1656DF;
    z-index: 1;
}

.user-form-header {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 2;
}

.user-form-header-back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background: transparent;
    border: 1.5px solid #F8FAFC;
    color: #F8FAFC;
    border-radius: 8px;
    padding: 0.5rem 0.7rem;
    font-size: 0.750rem;
    font-weight: 600;
    font-family: 'Poppins';
    cursor: pointer;
    width: fit-content;
    transition: background 0.2s ease, transform 0.2s ease;
}

.user-form-header-back:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-2px);
}

.user-form-header-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #F8FAFC;
}

.user-form-header-subtitle {
    font-size: 1rem;
    font-weight: 500;
    color: #F8FAFC;
}

.user-form-card {
    margin: 0 1rem;
    background: #F8FAFC;
    border-radius: 12px;
    flex: 1;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 2;
    margin-bottom: 1rem;
}

.user-form-tabs {
    display: flex;
    background: #E8EAF0;
    border-radius: 8px;
    padding: 4px;
    gap: 4px;
}

.user-form-tab {
    flex: 1;
    padding: 0.5rem;
    border: none;
    background: transparent;
    border-radius: 7px;
    font-size: 0.875rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color: #7D7D91;
    cursor: pointer;
    transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
}

.user-form-tab-active {
    background: #F8FAFC;
    color: #232447;
    font-weight: 500;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
</style>