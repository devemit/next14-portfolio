export default function Loading() {
   return (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-[#111010]'>
         <div className='flex flex-col items-center gap-4'>
            <div className='h-8 w-8 animate-spin rounded-full border-4 border-gray-700 border-t-[#D4D4D4]' />
         </div>
      </div>
   );
}
