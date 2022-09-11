import { shallowMount } from "@vue/test-utils";
import AboutVue from "@/views/About.vue";

describe("About.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(AboutVue, {});
    console.log(wrapper.vm);
    expect(wrapper.find("h1").text()).toEqual("This is an about page");
  });
});
