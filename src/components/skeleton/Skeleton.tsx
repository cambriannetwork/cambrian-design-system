/** One placeholder bar. It pulses unless the reader prefers reduced motion. */
export function Skeleton() {
  return <span className="cds-skeleton" />;
}

/** Placeholder rows for a table that is loading. Match the real column count so nothing jumps. */
export function TableSkeleton({ rows = 8, columns }: { rows?: number; columns: number }) {
  return (
    <table className="cds-table cds-table--skeleton" aria-hidden="true">
      <tbody>
        {Array.from({ length: rows }, (_, row) => (
          <tr key={row}>
            {Array.from({ length: columns }, (_, column) => (
              <td key={column}>
                <Skeleton />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
