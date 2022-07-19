<template>
   <div v-if="posts.length > 0">
      <h3>List of posts</h3>
      <transition-group name="user-list">
         <post-item
           v-for="post in posts"
           :post="post"
           :key="post.id"
           @remove="$emit('remove', post)"
         />
      </transition-group>
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
   .user-list-item {
      display: inline-block;
      margin-right: 10px;
   }
   .user-list-enter-active,
   .user-list-leave-active {
      transition: all 0.4s ease;
   }
   .user-list-enter-from,
   .user-list-leave-to {
      opacity: 0;
      transform: translateX(130px);
   }
</style>