<template>
  <v-row no-gutters class="display-curriculum-page">
    <v-col md="6" offset-md="2" sm="8" offset-sm="2">
      <v-row>
        <v-col>
          <h1>{{ selectedCurriculum.name }}</h1>
          <p>{{ selectedCurriculum.description }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels multiple>
            <v-expansion-panel v-for="(section, i) in selectedCurriculum.sections" v-bind:key="i">
              <v-expansion-panel-header>Section {{ i + 1 }} - {{ section.name }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list subheader two-line flat>
                  <v-subheader>Resources</v-subheader>

                  <v-list-item-group v-model="settings" multiple>
                    <v-list-item
                      v-for="(resource, j) in section.resources"
                      v-bind:key="resource + j"
                    >
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox v-model="active" color="primary" @click="toggle"></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title>{{ resource }}</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>

                <v-list subheader two-line flat>
                  <v-subheader>Projects</v-subheader>

                  <v-list-item-group v-model="settings" multiple>
                    <v-list-item v-for="(project, k) in section.projects" v-bind:key="project + k">
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox v-model="active" color="primary" @click="toggle"></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title>{{ project }}</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      selectedCurriculum: {}
    };
  },
  computed: {
    ...mapState(["curriculaData"])
  },
  mounted() {
    this.selectedCurriculum = this.curriculaData.find(curriculum => {
      return curriculum.id === this.$route.params.id;
    });
  }
};
</script>