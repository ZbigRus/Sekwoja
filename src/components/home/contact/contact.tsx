import Image from 'next/image';
import ClockIcon from '@/assets/icons/clock';
import ContactPhoneIcon from '@/assets/icons/contact-phone';
import LocationIcon from '@/assets/icons/location';
import MailIcon from '@/assets/icons/mail';
import UserIcon from '@/assets/icons/user';
import { contactWoman } from '@/assets/images';
import Form from './form';

export default function Contact({
  defaultType,
  isExpanded,
}: {
  defaultType?: string;
  isExpanded?: boolean;
}) {
  return (
    <section className="py-[0.6in] lg:py-[1in] sm:px-[8vw] md:px-[4vw] 2xl:pl-[16vw] xl:pr-0 flex flex-col gap-8 xl:items-center xl:grid grid-cols-[1fr_2fr] overflow-hidden">
      <div className="flex flex-col gap-4 px-[8vw] sm:px-0">
        <h3 className="text-sm text-secondary font-medium">
          Zrealizuj marzenia o idealnym wnętrzu
        </h3>
        <h2 className="font-medium max-w-md text-2xl xl:text-3xl select-none">
          Zrealizuj marzenia o idealnym wnętrzu z nami
        </h2>
        {isExpanded ? (
          <div className="xl:block hidden mt-4">
            <InfoBox />
          </div>
        ) : (
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2">
              <LocationIcon />
              <span className="text-lg font-medium">
                ul. Przemysłowa 1, 39-200 Dębica
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ContactPhoneIcon />
              <span className="text-lg font-medium">+48 14 681 18 89</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon />
              <span className="text-lg font-medium">biuro@sekwoja.com</span>
            </div>
          </div>
        )}
      </div>
      <div className="xl:relative flex items-center px-[8vw] sm:px-0 xl:px-12 gap-12">
        <div className="bg-white rounded-xl shadow-[0px_20px_40px_rgba(17,27,22,0.08)] py-10 px-8 flex flex-col gap-4 xl:w-max w-full min-h-[120%] xl:max-w-[62%]">
          <h3 className="text-[22px] mb-4 font-medium">
            Wypełnij formularz, odezwiemy się!
          </h3>
          <Form defaultType={defaultType} />
        </div>
        <div className="absolute left-0 right-0 xl:w-full bg-[#F7F3E5] rounded-l-xl h-[3.4in] flex justify-end items-end w-screen xl:pr-12 -z-10">
          <Image
            height={420}
            className="hidden xl:block w-1/3 max-w-[3.2in]"
            src={contactWoman}
            alt="Employer"
          />
        </div>
      </div>
      <div className="xl:hidden px-[8vw] sm:px-0">
        <InfoBox />
      </div>
    </section>
  );
}

function InfoBox() {
  return (
    <div className="border-[#E9E9E9] border-[1px] rounded-xl px-8 py-6 sm:w-max w-full flex-wrap flex xl:flex-col gap-4 bg-white relative z-10">
      <div>
        <h3 className="font-medium mb-4">Dział sprzedaży i obsługi klienta</h3>
        <dl className="flex flex-col gap-3 text-sm text-font/80">
          <div className="flex items-center gap-2">
            <dt className="w-[1.5ch]">
              <ClockIcon />
              <span className="sr-only">Godziny otwarcia</span>
            </dt>
            <dd className="font-medium">Pon - Pt (8:00 - 16:00)</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="w-[1.5ch]">
              <ClockIcon />
              <span className="sr-only">Godziny otwarcia</span>
            </dt>
            <dd className="font-medium">Sob (9:00 - 13:00)</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="w-[1.5ch]">
              <MailIcon />
              <span className="sr-only">Email</span>
            </dt>
            <dd className="font-medium">biuro@sekwoja.com</dd>
          </div>
        </dl>
      </div>
      <div className="xl:h-[1px] xl:w-auto w-[1px] h-full bg-[#E9E9E9]"></div>
      <div>
        <h3 className="font-medium mb-4">Dział projektów</h3>
        <dl className="flex flex-col gap-3 text-sm text-font/80">
          <div className="flex items-center gap-2">
            <dt className="w-[1.5ch]">
              <MailIcon />
              <span className="sr-only">Email</span>
            </dt>
            <dd className="font-medium">projekty@sekwoja.com</dd>
          </div>
        </dl>
        <h3 className="font-medium mb-4 mt-4">Projektanci</h3>
        <dl className="flex flex-col gap-3 text-sm text-font/80">
          <div className="flex items-center gap-2">
            <dt className="w-[1.5ch]">
              <UserIcon />
              <span className="sr-only">Imię i nazwisko</span>
            </dt>
            <dd className="font-medium">Zbigniew Rusin</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="w-[1.5ch]">
              <MailIcon />
              <span className="sr-only">Email</span>
            </dt>
            <dd className="font-medium">zbigniew.rusin@sekwoja.com</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="w-[1.5ch]">
              <ContactPhoneIcon />
              <span className="sr-only">Numer telefonu</span>
            </dt>
            <dd className="font-medium">+48 661 938 260</dd>
          </div>
        </dl>
        <dl className="flex flex-col gap-3 text-sm text-font/80 mt-6">
          <div className="flex items-center gap-2">
            <dt className="w-[1.5ch]">
              <UserIcon />
              <span className="sr-only">Imię i nazwisko</span>
            </dt>
            <dd className="font-medium">Ireneusz Kobiałka</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="w-[1.5ch]">
              <MailIcon />
              <span className="sr-only">Email</span>
            </dt>
            <dd className="font-medium">ireneusz.kobialka@sekwoja.com</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="w-[1.5ch]">
              <ContactPhoneIcon />
              <span className="sr-only">Numer telefonu</span>
            </dt>
            <dd className="font-medium">+48 695 931 070</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
