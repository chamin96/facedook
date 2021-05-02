<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" required />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" required />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <label for="role">Role</label>
      <select id="role" v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>

      <label for="skills">Skills</label>
      <br />
      <small>Press <b>Alt + ,</b> to add a skill</small>
      <input
        id="skills"
        v-model="tempSkills"
        type="text"
        @keyup.alt="addSkill"
      />
      <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>

      <div class="terms">
        <input id="terms" v-model="terms" type="checkbox" required />
        <label for="terms">Accept Terms and Conditions</label>
      </div>

      <div class="submit">
        <button type="submit">Create an Account</button>
      </div>
    </form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms: {{ terms }}</p>
  </div>
</template>
