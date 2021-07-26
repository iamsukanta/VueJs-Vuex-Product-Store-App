<template>
    <button class="btn btn-sm" :class="text == 'Remove From Cart'? 'btn-danger': 'btn-warning'"> {{ text }} </button>
</template>

<script>
export default {
    props: ['text']
}
</script>