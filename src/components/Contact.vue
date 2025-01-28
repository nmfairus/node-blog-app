<template>
    <div class="contact max-w-lg mx-auto p-6 border border-gray-300 rounded-lg">
        <h1 class="text-2xl font-bold mb-6">Contact Us</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
                <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-gray-700">Message:</label>
                <textarea id="message" v-model="form.message" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Handle form submission
            console.log('Form submitted:', this.form);
            // Reset form
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
};
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS classes are used */
</style>
