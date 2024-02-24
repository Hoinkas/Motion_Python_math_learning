import {Latex, makeScene2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core/lib/utils';
import {
  CodeBlock,
} from '@motion-canvas/2d/lib/components/CodeBlock';

export default makeScene2D(function* (view) {
  const code = createRef<CodeBlock>();
  const tex = createRef<Latex>();
  view.fill('#141414');

  yield view.add(
    <>
      <CodeBlock
        language='python'
        ref={code}
        fontSize={40}
        width={1920/2}
        x={-1920/5}
        y={-100}

        fontFamily={'JetBrains Mono'}
        code={() => 
`def ln(ln_base, ln_num):
    #Return NaN for non-positive values
    if ln_base <= 0:
        return float('nan')
    
    result = 0.0

    for i in range(1, ln_num + 1):
        coefficient = (-1) ** (i - 1) / i
        result += coefficient * (ln_base - 1) ** i

    return result`
  }
      />
      <Latex
      // Taylor series for ln(x)
        ref={tex}
        tex="{\color{white} 
          f\left(x\right) = ln\left(x\right) = 

          \sum_{n=1}^{\infty} (-1)^{n-1} \frac{(x - 1)^{n}}{n}\
        }"
        x={1920/5}
        y={1080/3}
        width={900}
      />,
    </>
  );
});