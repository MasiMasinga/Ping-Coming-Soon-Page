<template>
    <div class="w-screen h-screen bg-white">
        <nav>
            <slot name="navbar"></slot>
        </nav>
        <main>
            <slot name="hero"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>