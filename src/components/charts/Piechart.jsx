import { Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';

const Component = ({ data, colors, height = 150, showLabelList }) => {
  const theme = useTheme();

  const CHART_COLORS = [theme.palette.primary.main, theme.palette.secondary.main];

  const CustomLabelLine = (props) => {
    const { points, stroke, payload } = props;

    if (!showLabelList.includes(payload.name)) return null;

    return (
      <polyline stroke={stroke} fill="none" points={points.map((p) => `${p.x},${p.y}`).join(` `)} />
    );
  };

  const CustomLabel = (props) => {
    const { x, y, name, textAnchor, fill, midAngle } = props;

    const isVertical = Math.abs(midAngle) > 60 && Math.abs(midAngle) < 120;

    if (isVertical) {
      return (
        <text x={x} y={y} textAnchor="middle" fill={fill} fontSize={12} fontWeight={600}>
          {name}
        </text>
      );
    }

    const max = 10;

    const words = name.length > max ? name.match(new RegExp(`.{1,${max}}`, `g`)) : [name];

    return (
      <text x={x} y={y} textAnchor={textAnchor} fill={fill} fontSize={12}>
        {words.map((line, index) => {
          return (
            <tspan key={index} x={x} dy={index === 0 ? 0 : 16}>
              {line}
            </tspan>
          );
        })}
      </text>
    );
  };

  return (
    <Box sx={{ width: `100%`, height, overflow: `visible` }}>
      <ResponsiveContainer width="100%" height="100%" sx={{ overflow: `visible` }}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            outerRadius="60%"
            isAnimationActive={false}
            label={(props) =>
              showLabelList.includes(props.name) ? <CustomLabel {...props} /> : null
            }
            labelLine={<CustomLabelLine />}
          >
            {data.map((entry, index) => {
              return (
                <Cell
                  key={entry.name}
                  fill={
                    colors && colors.length > 0
                      ? colors[index % colors.length]
                      : CHART_COLORS[index % CHART_COLORS.length]
                  }
                />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export { Component };
