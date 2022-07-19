<template>
   <div class="post">
      <div>
         <div><strong>Name:</strong>{{post.title}}</div>
         <div><strong>Description:</strong>{{post.body}}</div>
      </div>
      <div class="post_btns">
         <my-button
         @click="$router.push(`/${post.id}`)"
         >Open</my-button>
         <my-button
            @click="$emit('remove', post)"
         >Delete post</my-button>
      </div>
   </div>
</template>

<script>
   export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
   .post{
      padding: 15px;
      border: 2px solid green;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   .post_btns{
      display: flex;
   }
</style>