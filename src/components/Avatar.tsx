// ts 提示总是有问题
interface MyComponentProps {
  name: string;
}

const MyComponent = defineComponent<MyComponentProps>({
  // @ts-ignore
  props: {
    name: String,
  },
  setup(props: any) {
    return () => <div>{props.name}</div>;
  },
});

export default MyComponent;
