import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useTranslation } from 'react-i18next';
import PouriaTheme from '../../shared/hooks/PouriaTheme';

const Navbar = () => {
  const [t,i18n] = useTranslation()

  const changeLanguage = (lang:string) => {
    i18n.changeLanguage(lang)
    
  }
 
  return (
    <div className='flex font-vazir h-[200px] -mb-[3rem] mt-[3rem] flex-row justify-between bg-dark text-light'>
      <div className='flex  flex-row gap-5 '>
        <LightModeIcon />
        <ModeNightIcon />
        <h4 className='cursor-pointer' onClick={(e:any) => changeLanguage("en")}>فارسی</h4>
        <h4 className='cursor-pointer' onClick={(e:any) => changeLanguage("fa")}>english</h4>
        <PouriaTheme/>
      </div>
      <div className='cursor-pointer'> 
        <h1>{t('تنظیمات کاربری')}</h1>
      </div>  
    </div>
  )
}

export default Navbar