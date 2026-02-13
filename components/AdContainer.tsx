import React from 'react';

interface AdContainerProps {
  type?: 'banner' | 'leaderboard';
}

export const AdContainer: React.FC<AdContainerProps> = ({ type = 'banner' }) => {
  const adConfig = type === 'leaderboard' 
    ? {
        key: '0d09ec57001d7f2452de8422706113f8',
        width: 728,
        height: 90,
        label: 'Leaderboard Ad'
      }
    : {
        key: '4c748810787e085ff1582d874df9e3ce',
        width: 468,
        height: 60,
        label: 'Banner Ad'
      };

  const adCode = `
    <script type="text/javascript">
      atOptions = {
        'key' : '${adConfig.key}',
        'format' : 'iframe',
        'height' : ${adConfig.height},
        'width' : ${adConfig.width},
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="//www.highperformanceformat.com/${adConfig.key}/invoke.js"></script>
  `;

  return (
    <section className="py-8 px-4 bg-slate-950 flex justify-center">
      <div className="w-full max-w-4xl bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center overflow-hidden relative min-h-[120px]">
        <span className="text-[10px] uppercase tracking-widest mb-2 text-slate-600 absolute top-1 right-2">Sponsored</span>
        <div className="flex justify-center w-full overflow-hidden">
             <iframe 
               title={adConfig.label}
               srcDoc={`<html><body style='margin:0;padding:0;background:transparent;display:flex;justify-content:center;align-items:center;'>${adCode}</body></html>`}
               width={adConfig.width}
               height={adConfig.height}
               style={{border: 'none', maxWidth: '100%'}}
               scrolling="no"
             />
        </div>
      </div>
    </section>
  );
};