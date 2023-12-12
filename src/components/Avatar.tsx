// ts 提示总是有问题
interface MyComponentProps {
  name: string;
}

const MyComponent = defineComponent<MyComponentProps>({
  props: {
    name: String,
  },
  setup(props) {
    return () => <div>{props.name}</div>;
  },
});

export default MyComponent;
