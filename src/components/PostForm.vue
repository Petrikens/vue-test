<template>
      <form @submit.prevent>
         <h4>Create a new post!</h4>
         <my-input
         v-model:value="post.title"
         placeholder="Name"
         type="text"
         />
         <my-input
         v-model:value="post.body"
         class="input"
         placeholder="Description"
         type="text"
         />
         <my-button
         @click="createPost"
         class="create_btn"
         >Create</my-button>
      </form>
</template>

<script>
   export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        }
    },
}
</script>

<style scoped>
   form{
      display: flex;
      flex-direction: column;
   }
   .create_btn{
      align-self: flex-end;
      margin-top: 15px;
   }
</style>