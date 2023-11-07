import { renderHookWithCounterProvider, act, RenderHookResult } from '~/utils/test-utils';
import { useCounter } from '../useCounter';
import { CountContextResult } from '../../counter-context';

function renderHook() {
  return renderHookWithCounterProvider(() => useCounter());
}

function renderWithIncreasedValue(times = 1) {
  const { result } = renderHook();

  act(() => {
    Array(times)
      .fill('')
      .forEach(() => {
        result.current.increase();
      });
  });

  return result;
}

function renderWithDecreasedValue() {
  const { result } = renderHook();

  act(() => result.current.decrease());

  return result;
}

function renderWithRestartedValue() {
  const { result } = renderHook();

  act(() => result.current.reset());

  return result;
}

describe('useCounter()', () => {
  describe('when it is the first render', () => {
    it('returns the "count" property with the default value', () => {
      const expectedInitialValue = 0;

      const { result } = renderHook();

      expect(result.current.count).toEqual(expectedInitialValue);
    });

    it('returns the "canDecrease" property with the value false', () => {
      const expectedValue = false;

      const { result } = renderHook();

      expect(result.current.canDecrease).toEqual(expectedValue);
    });

    describe('and the increase method is called', () => {
      it('returns the "count" property with current value increased by one', () => {
        const expectedInitialValue = 1;

        const result = renderWithIncreasedValue();

        expect(result.current.count).toEqual(expectedInitialValue);
      });

      it('returns the "canDecrease" property with the value true', () => {
        const expectedValue = true;

        const result = renderWithIncreasedValue();

        expect(result.current.canDecrease).toEqual(expectedValue);
      });
    });

    describe('and the decrease method is called', () => {
      it('returns the "count" property with the default value', () => {
        const expectedInitialValue = 0;

        const result = renderWithDecreasedValue();

        expect(result.current.count).toEqual(expectedInitialValue);
      });

      it('returns the "canDecrease" property with the value false', () => {
        const expectedValue = false;

        const result = renderWithDecreasedValue();

        expect(result.current.canDecrease).toEqual(expectedValue);
      });
    });

    describe('and the reset method is called', () => {
      it('returns the "count" property with default value', () => {
        const expectedInitialValue = 0;

        const result = renderWithRestartedValue();

        expect(result.current.count).toEqual(expectedInitialValue);
      });

      it('returns the "canDecrease" property with the value false', () => {
        const expectedValue = false;

        const result = renderWithRestartedValue();

        expect(result.current.canDecrease).toEqual(expectedValue);
      });
    });
  });

  describe('when there is increased value', () => {
    const currentValue = 10;
    let result: RenderHookResult<CountContextResult, undefined>['result'];

    beforeEach(() => {
      result = renderWithIncreasedValue(currentValue);
    });

    it('returns the "count" property with the current value', () => {
      const expectedInitialValue = 10;

      expect(result.current.count).toEqual(expectedInitialValue);
    });

    it('returns the "canDecrease" property with the value true', () => {
      const expectedValue = true;

      expect(result.current.canDecrease).toEqual(expectedValue);
    });

    describe('and the increase method is called', () => {
      it('returns the "count" property with current value increased by one', () => {
        const expectedInitialValue = 11;

        act(() => result.current.increase());

        expect(result.current.count).toEqual(expectedInitialValue);
      });
    });

    describe('and the decrease method is called', () => {
      it('returns the "count" property with current value decreased by one', () => {
        const expectedInitialValue = 9;

        act(() => result.current.decrease());

        expect(result.current.count).toEqual(expectedInitialValue);
      });

      it('returns the "canDecrease" property with the value true', () => {
        const expectedValue = true;

        act(() => result.current.decrease());

        expect(result.current.canDecrease).toEqual(expectedValue);
      });
    });

    describe('and the reset method is called', () => {
      it('returns the "count" property with default value', () => {
        const expectedInitialValue = 0;

        const result = renderWithRestartedValue();

        expect(result.current.count).toEqual(expectedInitialValue);
      });

      it('returns the "canDecrease" property with the value false', () => {
        const expectedValue = false;

        const result = renderWithRestartedValue();

        expect(result.current.canDecrease).toEqual(expectedValue);
      });
    });
  });
});
