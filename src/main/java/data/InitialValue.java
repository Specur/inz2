package data;

import java.io.IOException;
import java.util.concurrent.atomic.AtomicInteger;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import db.JDBCenter;
import dto.BundesLigaDTO;
import dto.ChampionsLeagueDTO;
import dto.PremierLeagueDTO;
import dto.SerieADTO;

public class InitialValue {
	public static String[] YEAR = { "2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18" };
	static JDBCenter jsdb;
	static AtomicInteger atomicInteger = new AtomicInteger();

	public static void fetchBundesliga() {
		jsdb = new JDBCenter(BundesLigaDTO.class);
		Document doc = null;
		BundesLigaDTO bLDTO = new BundesLigaDTO();

		for (String season : YEAR) {
			try {
				doc = Jsoup.connect("http://www.skysports.com/bundesliga-results/" + season).get();
			} catch (IOException e) {
				e.printStackTrace();
			}

			Elements newsHeadlines = doc.select("div.fixres__item > a > span > span > span ");

			for (int i = 0; i < newsHeadlines.size(); i++) {
				bLDTO.setMaster(newsHeadlines.get(i).text());
				bLDTO.setGMaster(newsHeadlines.get(++i).text());
				bLDTO.setGGuest(newsHeadlines.get(++i).text());
				bLDTO.setGuest(newsHeadlines.get(++i).text());
				bLDTO.setId(atomicInteger.getAndIncrement());
				bLDTO.setDate(season);

				jsdb.insert(bLDTO);
			}

		}

	}

	public static void fetchChampionsLeague() {
		jsdb = new JDBCenter(ChampionsLeagueDTO.class);
		Document doc = null;
		ChampionsLeagueDTO cLDTO = new ChampionsLeagueDTO();

		for (String season : YEAR) {
			try {
				doc = Jsoup.connect("http://www.skysports.com/champions-league-results/" + season).get();
			} catch (IOException e) {
				e.printStackTrace();
			}

			Elements newsHeadlines = doc.select("div.fixres__item > a > span > span > span ");

			for (int i = 0; i < newsHeadlines.size(); i++) {
				cLDTO.setMaster(newsHeadlines.get(i).text());
				cLDTO.setGMaster(newsHeadlines.get(++i).text());
				cLDTO.setGGuest(newsHeadlines.get(++i).text());
				cLDTO.setGuest(newsHeadlines.get(++i).text());
				cLDTO.setId(atomicInteger.getAndIncrement());
				cLDTO.setDate(season);

				jsdb.insert(cLDTO);
			}

		}

	}

	public static void fetchPremierLeague() {
		jsdb = new JDBCenter(PremierLeagueDTO.class);
		Document doc = null;
		PremierLeagueDTO pLDTO = new PremierLeagueDTO();

		for (String season : YEAR) {
			try {
				doc = Jsoup.connect("http://www.skysports.com/premier-league-results/" + season).get();
			} catch (IOException e) {
				e.printStackTrace();
			}

			Elements newsHeadlines = doc.select("div.fixres__item > a > span > span > span ");

			for (int i = 0; i < newsHeadlines.size(); i++) {
				pLDTO.setMaster(newsHeadlines.get(i).text());
				pLDTO.setGMaster(newsHeadlines.get(++i).text());
				pLDTO.setGGuest(newsHeadlines.get(++i).text());
				pLDTO.setGuest(newsHeadlines.get(++i).text());
				pLDTO.setId(atomicInteger.getAndIncrement());
				pLDTO.setDate(season);

				jsdb.insert(pLDTO);
			}

		}

	}

	public static void fetchSerieA() {
		jsdb = new JDBCenter(SerieADTO.class);
		Document doc = null;
		SerieADTO sADTO = new SerieADTO();

		for (String season : YEAR) {
			try {
				doc = Jsoup.connect("http://www.skysports.com/serie-a-results/" + season).get();
			} catch (IOException e) {
				e.printStackTrace();
			}

			Elements newsHeadlines = doc.select("div.fixres__item > a > span > span > span ");

			for (int i = 0; i < newsHeadlines.size(); i++) {
				sADTO.setMaster(newsHeadlines.get(i).text());
				sADTO.setGMaster(newsHeadlines.get(++i).text());
				sADTO.setGGuest(newsHeadlines.get(++i).text());
				sADTO.setGuest(newsHeadlines.get(++i).text());
				sADTO.setId(atomicInteger.getAndIncrement());
				sADTO.setDate(season);

				jsdb.insert(sADTO);
			}

		}

	}

	

	public static void main(String[] args) {

//		fetchSerieA();
//		fetchPremierLeague();
//		fetchChampionsLeague();
		fetchBundesliga();
//		SerieADTO sa = new SerieADTO();
//		sa.setMaster("Lazio");
//		JDBCenter js = new JDBCenter();
//		System.out.println(js.findAllMatchByLeague(sa).size());
		

	}

}
