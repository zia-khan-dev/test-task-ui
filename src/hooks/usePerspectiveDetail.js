import { useMemo } from 'react';
import { perspectiveDetail } from '../data/perspectiveDetailData';

export function usePerspectiveDetail(id) {
  return useMemo(() => perspectiveDetail, [id]);
}
