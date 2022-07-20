<template>
   <div v-if="posts.length > 0">
      <h3>List of posts</h3>
      <div>
         <post-item
           v-for="post in posts"
           :post="post"
           :key="post.id"
           @remove="$emit('remove', post)"
         />
      </div>
   </div>
   <h2 v-else class="emptyPosts">No posts yet</h2>
</template>

<script>
import PostItem from './PostItem.vue'
   export default {
  components: { PostItem },
      props:{
         posts:{
            type: Array,
            required: true
         }
      }
   }
</script>

<style scoped>
   .emptyPosts{
      color: red;
   }
</style>