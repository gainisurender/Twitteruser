<template>
  <div class="todo-item">
    <!-- <div v-if="update"> -->
    <div class="end" v-if="isUpdating">
      <p>
        <input type="text" v-model="title" required />
      </p>
    </div>
    <p v-else>{{ post.title }}</p>
    <!-- </div> -->

    <div class="btns" v-if="post.userId == $store.state.id">
      <button v-if="!isUpdating" class="btn" @click="updatePost">Update</button>
      <button
        v-if="!isUpdating"
        class="btn-danger"
        @click="deletePost(post.id)"
      >
        Delete
      </button>
      <button class="button" v-else @click="submitPost">Submit</button>
    </div>
    <div>
      <h3>Post Comments</h3>
      <div v-for="(comments, i) in comments" :key="i">
        <div>
          {{ comments.commenttext
          }}<button
            class="delete"
            v-if="comments.userId == $store.state.id"
            @click="deleteComment(comments.id)"
          >
            D
          </button>
        </div>
      </div>
      <div>
        <label for="">Comment Here</label>
        <input type="text" v-model="commenttext" />
        <button class="comment" @click="createComment">Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      commenttext: '',
      isUpdating: false,
      title: '',
    }
  },
  //   props: {
  //     item: {
  //       type: Object,
  //       required: true,
  //     },
  //   },
  computed: {
    ...mapState(['post', 'id', 'comments']),
  },
  async created() {
    await this.$store.dispatch('getAllComments')
    return
  },
  methods: {
    async createComment() {
      await this.$store.dispatch('createComment', this.commenttext)
      await this.$store.dispatch('getAllComments')
      this.commenttext = ''
    },
    async deleteComment(id) {
      await this.$store.dispatch('deleteComment', id)
      await this.$store.dispatch('getAllComments')
    },
    updatePost() {
      this.isUpdating = true
      this.title = this.post.title
      // await this.$$store.dispatch('updatePost', this.title)
    },
    // async update(id) {
    //   this.isVisible = false
    //   console.log(id)
    //   console.log(this.title)
    //   await this.$store.dispatch('updateTodo', { id: id, title: this.title })
    // },
    async deletePost(id) {
      console.log(id)
      await this.$store.dispatch('deletePost', id)
      this.$router.push('/UserHome')
    },
    async submitPost() {
      this.isUpdating = false
      await this.$store.dispatch('updatePost', this.title)
      this.$store.commit('updatePost', this.title)
    },
  },
}
</script>

<style>
</style>