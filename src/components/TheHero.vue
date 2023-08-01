<template>
    <div class="px-20">
        <div class="flex justify-center flex-col">
            <div class="flex justify-center	flex-row">
                <h1 class="text-center text-gray-400 text-2xl font-medium">
                    We are launching
                </h1>
                <h1 class="text-center text-2xl ml-2">soon!</h1>
            </div>
            <h4 class="text-center text-sm mt-3 font-normal">
                Subscribed and get notified
            </h4>
        </div>
        <div class="flex justify-center py-6">
            <form @submit="submitForm" novalidate class="flex items-center xs:flex-col md:flex-row">
                <div class="flex flex-col items-center">
                    <input v-model="email" label="email-address" placeholder="Your email address..." type="email" required
                        class="xs:mx-0 md:mx-2.5 p-3 border border-primary rounded-full h-12 w-96" />
                    <p v-if="errorMessage" class="text-red-500 text-xs">{{ errorMessage }}</p>
                </div>
                <button type="submit"
                    class="xs:mx-0 md:mx-2.5 bg-primary rounded-full text-white p-2.5 xs:w-full md:w-40 xs:mt-2 md:mt-0 hover:bg-primary-700 active:bg-primary-700 focus:outline-none focus:ring focus:bg-primary">
                    Notify Me
                </button>
            </form>
        </div>
        <div class="flex justify-center">
            <img src="../assets/images/illustration-dashboard.png" class="h-64" />
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            email: '',
            errorMessage: '',
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault()
            if (!this.emailIsValid()) {
                this.errorMessage = 'Please provide a valid email address';
                return false;
            } else {
                this.errorMessage = '';
            }
        },
        emailIsValid() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(this.email);
        },
    },
};
</script>