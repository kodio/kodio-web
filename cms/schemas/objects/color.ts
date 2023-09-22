import { defineType } from 'sanity';
import ColorInput from '../../components/ColorInput';

export const color = defineType({
  name: 'color',
  title: 'Color',
  type: 'string',
  components: {
    input: ColorInput,
  },
});
