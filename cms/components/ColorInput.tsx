import { Box, Flex, Text, Tooltip } from '@sanity/ui';
import { useCallback } from 'react';
import { set, type StringInputProps, type StringSchemaType } from 'sanity';

const COLOR_MAP = {
  white: '#fffdf5',
  'green-900': '#0f1f24',
  'green-800': '#112f3a',
  'green-700': '#1c4757',
  'orange-500': '#c96336',
  'orange-400': '#ef8354',
  'orange-300': '#faa682',
  'orange-200': '#ffc7b0',
  'purple-400': '#b385d4',
  'purple-300': '#d3afe9',
  'purple-200': '#ebccff',
  'purple-100': '#f2deff',
  'yellow-200': '#f7e06a',
  'yellow-100': '#fff0b8',
  'yellow-50': '#fffae8',
};

type ColorSchema = Omit<StringSchemaType, 'options'> & {
  options?: { list?: { title: string; value: keyof typeof COLOR_MAP }[] };
};

export default function ColorInput(props: StringInputProps) {
  const { onChange, value } = props;
  const schemaType = props.schemaType as ColorSchema;

  const setColor = useCallback(
    (nextColor: string) => {
      onChange(set(nextColor));
    },
    [onChange]
  );

  return (
    <Flex gap={3}>
      {schemaType.options?.list?.map((option) => (
        <Tooltip
          key={option.value}
          placement="top"
          fallbackPlacements={['bottom']}
          content={
            <Box padding={2}>
              <Text muted size={1}>
                {option.title}
              </Text>
            </Box>
          }
        >
          <button
            onClick={() => setColor(option.value)}
            style={{
              cursor: 'pointer',
              backgroundColor: COLOR_MAP[option.value],
              width: 50,
              height: 50,
              borderRadius: 9999,
              border: `1px solid black`,
              outline: `${value === option.value ? '3px solid orange' : 'none'}`,
              outlineOffset: '2px',
            }}
          />
        </Tooltip>
      ))}
    </Flex>
  );
}
